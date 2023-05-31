import {useIsHomePath} from '~/lib/utils';
import {
  Drawer,
  useDrawer,
  Text,
  Input,
  IconLogin,
  IconAccount,
  IconBag,
  IconSearch,
  Heading,
  IconMenu,
  IconCaret,
  Section,
  // CountrySelector,
  Cart,
  CartLoading,
  Link,
} from '~/components';
import {useParams, Form, Await, useMatches} from '@remix-run/react';
import {useWindowScroll} from 'react-use';
import {Suspense, useEffect, useMemo} from 'react';
import {useState} from 'react';
import {useIsHydrated} from '~/hooks/useIsHydrated';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import { useLocation } from "react-router-dom";

import FacebookIcon from '~/assets/facebook.svg';
import LinekdInIcon from '~/assets/linkedIn.svg';
import DribbleIcon from '~/assets/dribble.svg';
import InstagramIcon from '~/assets/instagram.svg';

export function Layout({children, layout}) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Header
          title={layout?.shop.name ?? 'Hydrogen'}
          menu={layout?.headerMenu}
        />
        <main
          role="main"
          id="mainContent"
          className="m-auto max-w-[1700px] flex-grow overflow-hidden"
        >
          {children}
        </main>
      </div>
      <Footer menu={layout?.footerMenu} />
    </>
  );
}

function Header({title, menu}) {
  const isHome = useIsHomePath();

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers('ADD_TO_CART');

  // toggle cart drawer when adding to cart
  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      {menu && (
        <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
      )}
      <DesktopHeader
        isHome={isHome}
        title={title}
        menu={menu}
        openCart={openCart}
      />
      <MobileHeader
        isHome={isHome}
        title={title}
        openCart={openCart}
        openMenu={openMenu}
      />
    </>
  );
}

function CartDrawer({isOpen, onClose}) {
  const [root] = useMatches();

  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
      <div className="grid">
        <Suspense fallback={<CartLoading />}>
          <Await resolve={root.data?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
          </Await>
        </Suspense>
      </div>
    </Drawer>
  );
}

export function MenuDrawer({isOpen, onClose, menu}) {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Menu">
      <div className="grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({menu, onClose}) {
  return (
    <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
      {/* Top level menu items */}
      {(menu?.items || []).map((item) => (
        <span key={item.id} className="block">
          <Link
            to={item.to}
            target={item.target}
            onClick={onClose}
            className={({isActive}) =>
              isActive ? '-mb-px border-b pb-1' : 'pb-1'
            }
          >
            <Text as="span" size="copy">
              {item.title}
            </Text>
          </Link>
        </span>
      ))}
    </nav>
  );
}

function MobileHeader({title, isHome, openCart, openMenu}) {
  // useHeaderStyleFix(containerStyle, setContainerStyle, isHome);

  const params = useParams();

  return (
    <header
      role="banner"
      className={`${
        isHome
          ? 'bg-primary/80 text-contrast shadow-darkHeader dark:bg-contrast/60 dark:text-primary'
          : 'bg-contrast/80 text-primary'
      } sticky top-0 z-40 flex h-nav w-full items-center justify-between gap-4 px-4 leading-none backdrop-blur-lg md:px-8 lg:hidden`}
    >
      <div className="flex w-full items-center justify-start gap-4">
        <button
          onClick={openMenu}
          className="relative flex h-8 w-8 items-center justify-center"
        >
          <IconMenu />
        </button>
        <Form
          method="get"
          action={params.lang ? `/${params.lang}/search` : '/search'}
          className="items-center gap-2 sm:flex"
        >
          <button
            type="submit"
            className="relative flex h-8 w-8 items-center justify-center"
          >
            <IconSearch />
          </button>
          <Input
            className={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
        </Form>
      </div>

      <Link
        className="flex h-full w-full flex-grow items-center justify-center self-stretch leading-[3rem] md:leading-[4rem]"
        to="/"
      >
        <Heading
          className="text-center font-bold leading-none"
          as={isHome ? 'h1' : 'h2'}
        >
          {title}
        </Heading>
      </Link>

      <div className="flex w-full items-center justify-end gap-4">
        <AccountLink className="relative flex h-8 w-8 items-center justify-center" />
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
    </header>
  );
}

function DesktopHeader({isHome, title, y}) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  let location = useLocation();
  const menu = [
    {
      id: 1,
      title: 'Accueil',
      to: '/',
    },
    {
      id: 2,
      title: 'Expertises',
      to: '/agence-expertises',
      children: [
        {
          id: 21,
          title: 'Conseil & étude UX',
          to: 'agence-expertises/agence-ux-design',
          children: [
            {
              id: 211,
              title: 'e-Commerce Shopify',
              to: '/expertises/dev/sous-sous-menu-1',
              list: [
                'Développement de thèmes Shopify',
                'Développement Shopify custom',
                'Développement d’applications Shopify',
                'Automatisation Workflow Shopify',
                'Développement Shopify custom',
                // ... autres éléments de liste
              ],
              cta: {
                title: 'Découvrir notre agence Shopify',
                to: '/',
              },
            },
            {
              id: 212,
              title: 'Web',
              to: '/expertises/dev/sous-sous-menu-1',
              list: [
                'Développement site web',
                'Développement progressive web apps',
                'Connexion API & Services Externes',
                // ... autres éléments de liste
              ],
              cta: {
                title: 'Découvrir notre agence digitale',
                to: '/agence/ux',
              },
            },
          ],
        },
        {
          id: 22,
          title: 'UX design & conception',
          to: '/expertises/agence-ux-design',
          children: [
            {
              id: 221,
              title: 'e-Commerce Shopify',
              to: '/expertises/dev/sous-sous-menu-1',
              list: [
                'Développement de thèmes Shopify',
                'Développement Shopify custom',
                'Développement d’applications Shopify',
                'Automatisation Workflow Shopify',
                'Développement Shopify custom',
                // ... autres éléments de liste
              ],
              cta: {
                title: 'Découvrir notre agence Shopify',
                to: '/',
              },
            },
            {
              id: 222,
              title: 'Web',
              to: '/expertises/dev/sous-sous-menu-1',
              list: [
                'Développement site web',
                'Développement progressive web apps',
                'Connexion API & Services Externes',
                // ... autres éléments de liste
              ],
              cta: {
                title: 'Découvrir notre agence digitale',
                to: '/agence/ux',
              },
            },
          ],
        },
        {
          id: 23,
          title: 'Développement e-commerce, web & app',
          to: '/expertises/dev',
          children: [
            {
              id: 231,
              title: 'e-Commerce Shopify',
              to: '/expertises/dev/sous-sous-menu-1',
              list: [
                'Développement de thèmes Shopify',
                'Développement Shopify custom',
                'Développement d’applications Shopify',
                'Automatisation Workflow Shopify',
                'Développement Shopify custom',
                // ... autres éléments de liste
              ],
              cta: {
                title: 'Découvrir notre agence Shopify',
                to: '/',
              },
            },
            {
              id: 232,
              title: 'Web',
              to: '/expertises/dev/sous-sous-menu-1',
              list: [
                'Développement site web',
                'Développement progressive web apps',
                'Connexion API & Services Externes',
                // ... autres éléments de liste
              ],
              cta: {
                title: 'Découvrir notre agence digitale',
                to: '/agence/ux',
              },
            },
          ],
        },
        {
          id: 24,
          title: 'Audit technique & TMA',
          to: '/expertises/ux-design',
          children: [
            {
              id: 241,
              title: 'e-Commerce Shopify',
              to: '/expertises/dev/sous-sous-menu-1',
              list: [
                'Développement de thèmes Shopify',
                'Développement Shopify custom',
                'Développement d’applications Shopify',
                'Automatisation Workflow Shopify',
                'Développement Shopify custom',
                // ... autres éléments de liste
              ],
              cta: {
                title: 'Découvrir notre agence Shopify',
                to: '/',
              },
            },
            {
              id: 242,
              title: 'Web',
              to: '/expertises/dev/sous-sous-menu-1',
              list: [
                'Développement site web',
                'Développement progressive web apps',
                'Connexion API & Services Externes',
                // ... autres éléments de liste
              ],
              cta: {
                title: 'Découvrir notre agence digitale',
                to: '/agence/ux',
              },
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Solutions',
      to: '/agence-solutions',
      simpleChildren: [
        {
          title: 'Application mobile',
          to: '/solutions/app-mobile',
        },
        {
          title: 'Landing Page',
          to: '/solutions/landing-page',
        },
        {
          title: 'Site web',
          to: '/solutions/site-web',
        },
        {
          title: 'e-Commerce Shopify',
          to: '/solutions/site-web',
        },
        {
          title: 'Progressive Web App',
          to: '/solutions/site-web',
        },
      ],
    },
    {
      id: 4,
      title: 'Références',
      to: '/agence-references',
    },
    {
      id: 5,
      title: 'Agence',
      to: '/agence-imladris',
    },
    {
      id: 6,
      title: 'Ressources',
      to: '/agence-ressources',
      simpleChildren: [
        {
          title: 'Toutes les ressources',
          to: '/',
        },
        {
          title: 'Développement',
          to: '/',
        },
        {
          title: 'Shopify',
          to: '/',
        },
        {
          title: 'Agence',
          to: '/',
        },
        {
          title: 'Design',
          to: '/',
        },
      ],
    },
  ];

  const handleMouseEnter = (id) => {
    setActiveDropdown(id);
    setActiveSubDropdown(null);
  };

  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <header
      role="banner"
      className={`${isHome ? 'bg-gray-50' : 'bg-contrast/80 text-primary'} ${
        !isHome && y > 50 && 'shadow-lightHeader'
      } sticky top-0 z-40 hidden h-full w-full 
        leading-none backdrop-blur-lg transition duration-300 
        2xl:py-[1%] 2xl:px-[8%]
        xl:py-[2%]  xl:px-[2%]
        lg:py-[2%]  lg:px-[2%]
        lg:block`}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-[10px]">
          <Link to="/" className="text-lg font-bold">
          <svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="61" height="61" rx="30.5" fill="#2C2C2D"/>
          </svg>
          </Link>

          <nav className="flex h-full items-center rounded-[50px] bg-gray-200">
            {menu.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                className="relative"
              >
                
                <Link to={item.to} 
                      className={`rounded-full px-[26px] py-[20px] 
                                  text-[16px] font-medium leading-[20px] tracking-[0.02em]
                                  ${
                                    location.pathname === item.to ? "bg-gray-900 text-gray-50" : "text-gray-900 hover:bg-gray-900 hover:text-gray-50"
                                  }`}>
                  {item.title}
                </Link>

                {item.children && item.id === activeDropdown && (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="fixed left-0 mt-5 h-[400px] w-screen rounded-[50px] bg-gray-50 px-[120px] shadow-100"
                  >
                    <div
                      className="flex py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="w-1/3">
                        {item.children.map((child) => (
                          <div
                            key={child.id}
                            onMouseEnter={() => setActiveSubDropdown(child.id)}
                          >
                            <Link
                              to={child.to}
                              className="mb-[10px] mt-[20px] flex w-full justify-between rounded-[20px] bg-gray-200 p-[20px] 
                                        text-[16px] font-medium leading-[20px] tracking-[0.02em] text-gray-900
                                        hover:bg-blue-100 hover:text-gray-50"
                              role="menuitem"
                              onMouseEnter={() => setHoveredLink(child.id)}
                              onMouseLeave={() => setHoveredLink(null)}
                            >
                              {child.title}
                              {hoveredLink === child.id ? (
                                <svg
                                  className="mt-1"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 8 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2 0L8 6L2 12L0.6 10.6L5.2 6L0.6 1.4L2 0Z"
                                    fill="#FFFFFF"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  className="mt-1"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 8 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2 0L8 6L2 12L0.6 10.6L5.2 6L0.6 1.4L2 0Z"
                                    fill="#100F10"
                                  />
                                </svg>
                              )}
                            </Link>

                            {child.children &&
                              child.id === activeSubDropdown && (
                                <div
                                  onMouseEnter={() =>
                                    setActiveSubDropdown(child.id)
                                  }
                                  onMouseLeave={() =>
                                    setActiveSubDropdown(null)
                                  }
                                  className="gap-15 absolute left-1/3 top-0 ml-[2%] mt-[20px] flex h-full w-2/3 items-start rounded-[20px] px-[60px] py-[20px]"
                                >
                                  {child.children.map((grandChild) => (
                                    <div key={grandChild.id}>
                                      <div className="drop-shadow-primary mb-[20px] w-fit rounded-full border border-gray-700 px-[10px] py-[8px]">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.04em]">
                                          {grandChild.title}
                                        </p>
                                      </div>
                                      <ul className="flex flex-col items-start gap-[20px]">
                                        {grandChild.list &&
                                          grandChild.list.map((item, index) => (
                                            <li key={index}>
                                              <p className="cursor-pointer text-[16px] leading-[28px] tracking-[0.01em] text-gray-900">
                                                {item}
                                              </p>
                                            </li>
                                          ))}
                                      </ul>
                                      {grandChild.cta && (
                                        <button
                                          className="mt-[20px] rounded-full border border-gray-700 px-[30px] py-[16px] text-[16px] 
                                                              font-medium leading-[20px] tracking-[0.02em]"
                                        >
                                          <Link
                                            to={grandChild.cta.to}
                                            className=""
                                          >
                                            {grandChild.cta.title}
                                          </Link>
                                        </button>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {item.simpleChildren && item.id === activeDropdown && (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="fixed mt-5 w-[400px] rounded-[40px] bg-gray-50 px-[30px] py-[40px] shadow-100"
                  >
                    <div
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="w-full flex flex-col">
                        {item.simpleChildren.map((child, index) => (
                          <Link
                            key={index}
                            to={child.to}
                            className="py-[20px]
                                      text-[16px] leading-[28px] tracking-[0.01em] hover:text-blue-100"
                            role="menuitem"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <button className="rounded-full bg-green-100 px-[26px] py-[20px]
                          lg:p-[10px]">
          <Link
            to="/create-your-site"
            className="text-[16px] font-medium leading-[22px] tracking-[0.02em]"
          >
            Créez votre site web
          </Link>
        </button>
      </div>
    </header>
  );
}

function AccountLink({className}) {
  const [root] = useMatches();
  const isLoggedIn = root.data?.isLoggedIn;
  return isLoggedIn ? (
    <Link to="/account" className={className}>
      <IconAccount />
    </Link>
  ) : (
    <Link to="/account/login" className={className}>
      <IconLogin />
    </Link>
  );
}

function CartCount({isHome, openCart}) {
  const [root] = useMatches();

  return (
    <Suspense fallback={<Badge count={0} dark={isHome} openCart={openCart} />}>
      <Await resolve={root.data?.cart}>
        {(cart) => (
          <Badge
            dark={isHome}
            openCart={openCart}
            count={cart?.totalQuantity || 0}
          />
        )}
      </Await>
    </Suspense>
  );
}

function Badge({openCart, dark, count}) {
  const isHydrated = useIsHydrated();

  const BadgeCounter = useMemo(
    () => (
      <>
        <IconBag />
        <div
          className={`${
            dark
              ? 'bg-contrast text-primary dark:bg-primary dark:text-contrast'
              : 'bg-primary text-contrast'
          } absolute bottom-1 right-1 flex h-3 w-auto min-w-[0.75rem] items-center justify-center rounded-full px-[0.125rem] pb-px text-center text-[0.625rem] font-medium leading-none subpixel-antialiased`}
        >
          <span>{count || 0}</span>
        </div>
      </>
    ),
    [count, dark],
  );

  return isHydrated ? (
    <button
      onClick={openCart}
      className="relative flex h-8 w-8 items-center justify-center focus:ring-primary/5"
    >
      {BadgeCounter}
    </button>
  ) : (
    <Link
      to="/cart"
      className="relative flex h-8 w-8 items-center justify-center focus:ring-primary/5"
    >
      {BadgeCounter}
    </Link>
  );
}

const Footer = () => {
  const bottomLinks = [
    'Mentions légales',
    'Politique de confidentialité',
    'Conditions générales',
  ];

  return (
    <footer className="flex flex-col gap-20 rounded-[50px] border-[20px] border-gray-50 bg-gray-900 px-[120px] py-10 text-gray-50">
      <div className="flex justify-between">
        <p className="mr-[35px] text-[20px] leading-[34px] tracking-[0.01em]">
          Nous sommes une agence web à Paris, Bayonne et Biarritz spécialisée
          dans la transformation digitale et la création de sites web. Nous
          sommes experts en UX design et en développement web et mobile. Nos
          équipes d’UX designer, UI designer et de développeur vous accompagnent
          dans tous vos projets de création et de refonte.
        </p>
        <div className="flex flex-col">
          <div className="flex space-x-4">
            <img src={FacebookIcon} alt="Facebook" />
            <img src={LinekdInIcon} alt="LinkedIn" />
            <img src={DribbleIcon} alt="Dribble" />
            <img src={InstagramIcon} alt="Instagram" />
          </div>
          <div>
            <p>contact@unzestedouest.fr</p>
            <p>06 06 06 06 06</p>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <ul>
          <li>Accueil</li>
          <li>Expertises</li>
          <li>Solutions</li>
          <li>Références</li>
          <li>Agence</li>
          <li>Ressources</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Paris</li>
          <li>
            <address>Adresse, Paris</address>
          </li>
        </ul>
        <ul>
          <li>Biarritz</li>
          <li>
            <address>Adresse, Biarritz</address>
          </li>
        </ul>
      </div>
      <div className="flex justify-between">
        <p>
          &copy; {new Date().getFullYear()} / Imladris Agency, Inc. Built with
          Hydrogen
        </p>
        <div>
          {bottomLinks.map((link, index) => (
            <a key={index} href="#" className="ml-4 text-white">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

// function Footer({menu}) {
//   const isHome = useIsHomePath();
//   const itemsCount = menu
//     ? menu?.items?.length + 1 > 4
//       ? 4
//       : menu?.items?.length + 1
//     : [];

//   return (
//     <Section
//       divider={isHome ? 'none' : 'top'}
//       as="footer"
//       role="contentinfo"
//       className='flex flex-col rounded-[50px] bg-gray-900 text-gray-50 border-[20px] border-solid border-gray-50 overflow-hidden'
//     >
//       <FooterIntro />
//       <FooterMenu menu={menu} />
//       {/* <CountrySelector /> */}
//       <div
//         className={`self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`}
//       >
//         &copy; {new Date().getFullYear()} / Imladris Agency, Inc. Built with Hydrogen
//       </div>
//     </Section>
//   );
// }

// function FooterIntro({}) {
//   const styles = {
//     section: '',
//     nav: '',
//   };

//   return (
//     <>
//       <p>TEXTE INTRO</p>
//     </>
//   );
// }

// const FooterLink = ({item}) => {
//   if (item.to.startsWith('http')) {
//     return (
//       <a href={item.to} target={item.target} rel="noopener noreferrer">
//         {item.title}
//       </a>
//     );
//   }

//   return (
//     <Link to={item.to} target={item.target} prefetch="intent">
//       {item.title}
//     </Link>
//   );
// };

// function FooterMenu({menu}) {
//   const styles = {
//     section: '',
//     nav: '',
//   };

//   return (
//     <>
//       {(menu?.items || []).map((item) => (
//         <section key={item.id} className={styles.section}>
//           <Disclosure>
//             {({open}) => (
//               <>
//                 <Disclosure.Button className="text-left md:cursor-default">
//                   <Heading className="flex justify-between" size="lead" as="h3">
//                     {item.title}
//                     {item?.items?.length > 0 && (
//                       <span className="md:hidden">
//                         <IconCaret direction={open ? 'up' : 'down'} />
//                       </span>
//                     )}
//                   </Heading>
//                 </Disclosure.Button>
//                 {item?.items?.length > 0 ? (
//                   <div
//                     className={`${
//                       open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
//                     } overflow-hidden transition-all duration-300`}
//                   >
//                     <Suspense data-comment="This suspense fixes a hydration bug in Disclosure.Panel with static prop">
//                       <Disclosure.Panel static>
//                         <nav className={styles.nav}>
//                           {item.items.map((subItem) => (
//                             <FooterLink key={subItem.id} item={subItem} />
//                           ))}
//                         </nav>
//                       </Disclosure.Panel>
//                     </Suspense>
//                   </div>
//                 ) : null}
//               </>
//             )}
//           </Disclosure>
//         </section>
//       ))}
//     </>
//   );
// }
