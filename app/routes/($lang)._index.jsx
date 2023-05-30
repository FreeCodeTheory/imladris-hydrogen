import {defer} from '@shopify/remix-oxygen';
import {Suspense} from 'react';
import {Await, useLoaderData} from '@remix-run/react';
import {ProductSwimlane, FeaturedCollections, Hero, HeroBanner, Solutions, References, Expertises, Testimonials, HeroAction, Collapsible} from '~/components';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {getHeroPlaceholder} from '~/lib/placeholders';
import {seoPayload} from '~/lib/seo.server';
import {AnalyticsPageType} from '@shopify/hydrogen';
import {routeHeaders, CACHE_SHORT} from '~/data/cache';

import BlueIcon from '../assets/blue-icon.svg';
import PurpleIcon from '../assets/purple-icon.svg';
import YellowIcon from '../assets/yellow-icon.svg';
import PinkIcon from '../assets/pink-icon.svg';
import RedIcon from '../assets/red-icon.svg';
import GreenIcon from '../assets/green-icon.svg';

import Avatar from '../assets/avatar.png';
import Airbnb from '../assets/airbnb.svg';

import Phone from '../assets/phone.svg';
import DoublePhone from '../assets/double-phone.svg';
import ComputerPhone from '../assets/computer-phone.svg';
import Tablet from '../assets/tablet.svg';

export const headers = routeHeaders;

export async function loader({params, context}) {
  const {language, country} = context.storefront.i18n;

  if (
    params.lang &&
    params.lang.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    // If the lang URL param is defined, yet we still are on `EN-US`
    // the the lang param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }

  const {shop, hero} = await context.storefront.query(HOMEPAGE_SEO_QUERY, {
    variables: {handle: 'freestyle'},
  });

  const seo = seoPayload.home();

  return defer(
    {
      shop,
      primaryHero: hero,
      // These different queries are separated to illustrate how 3rd party content
      // fetching can be optimized for both above and below the fold.
      featuredProducts: context.storefront.query(
        HOMEPAGE_FEATURED_PRODUCTS_QUERY,
        {
          variables: {
            /**
             * Country and language properties are automatically injected
             * into all queries. Passing them is unnecessary unless you
             * want to override them from the following default:
             */
            country,
            language,
          },
        },
      ),
      secondaryHero: context.storefront.query(COLLECTION_HERO_QUERY, {
        variables: {
          handle: 'backcountry',
          country,
          language,
        },
      }),
      featuredCollections: context.storefront.query(
        FEATURED_COLLECTIONS_QUERY,
        {
          variables: {
            country,
            language,
          },
        },
      ),
      tertiaryHero: context.storefront.query(COLLECTION_HERO_QUERY, {
        variables: {
          handle: 'winter-2022',
          country,
          language,
        },
      }),
      analytics: {
        pageType: AnalyticsPageType.home,
      },
      seo,
    },
    {
      headers: {
        'Cache-Control': CACHE_SHORT,
      },
    },
  );
}

export default function Homepage() {
  const heroBannerContent = {
    backgroundColor: "bg-gradient-to-l from-green-50 to-green-100",
    category: "Agence Web",
    title: "Concepteurs d’expériences digitales qui propulsent votre business",
    subtitle: "Depuis plus de 3 ans, notre agence web place l’utilisateur au centre de la création de site afin de faire rayonner votre marque. Avec l’UX design, nous réalisons des expériences digitales engageantes pour vos clients.",
    button: "Propulser mon business",
    image: Phone,
    width: 100,
    mb: -32,
    mr: -14
  };
  const solutionsIntroContent = [
    {
    id: 1,
    category: 'Solutions',
    title: 'Nous créons des solutions digitales qui répondent à vos besoins',
    subtitle: '',
    },
  ];
  const solutionsCardContent = [
      {
          id: 1,
          bgClass: 'bg-gray-200',
          borderClass: 'border-[0.5px] border-gray-50',
          borderHoverClass: 'border-gray-900',
          image: BlueIcon,
          text1: 'Optimiser et améliorer l’',
          textColor: 'Ux Design ',
          textColorClass: 'text-blue-500',
          text2: ' de votre projet et booster votre business',
          buttonBorderClass: 'border-gray-900',
          buttonText: 'En savoir plus',
      },
      {
          id: 2,
          bgClass: 'bg-gray-200',
          image: PurpleIcon,
          text1: 'Créer votre ',
          textColor: 'Design System ',
          textColorClass: 'text-pink-300',
          text2: 'dans un budget maîtrisé et améliorer votre productivité',
          buttonBorderClass: 'border-gray-900',
          buttonText: 'En savoir plus',
      },
      {
          id: 3,
          bgClass: 'bg-gray-200',
          image: YellowIcon,
          text1: 'Créer votre ',
          textColor: 'MvP / Prototype ',
          textColorClass: 'text-yellow-400',
          text2: 'dans un budget maîtrisé et propulser votre marque',
          buttonBorderClass: 'border-gray-900',
          buttonText: 'En savoir plus',
      },
      {
          id: 4,
          bgClass: 'bg-gray-200',
          image: PinkIcon,
          text1: 'Créer un ',
          textColor: 'Site Web ',
          textColorClass: 'text-pink-200',
          text2: 'et augmentez vos taux de conversions et rétention',
          buttonBorderClass: 'border-gray-900',
          buttonText: 'En savoir plus',
      },
      {
          id: 5,
          bgClass: 'bg-gray-200',
          image: GreenIcon,
          text1: 'Créer votre ',
          textColor: 'e-Commerce Shopify ',
          textColorClass: 'text-green-400',
          text2: 'et booster les ventes de votre marque',
          buttonBorderClass: 'border-gray-900',
          buttonText: 'En savoir plus',
      },
      {
          id: 6,
          bgClass: 'bg-gray-200',
          image: RedIcon,
          text1: 'Créer votre ',
          textColor: 'Progressive Web App ',
          textColorClass: 'text-red-300',
          text2: 'et augmentez votre satisfaction client',
          buttonBorderClass: 'border-gray-900',
          buttonText: 'En savoir plus',
      },
  ];
  const referencesIntroContent = [   
    {
        id: 1,
        category: 'Références',
        title: 'Des expériences engageantes',
        subtitle: "Depuis 2020, notre agence web met en synergie son expertise en UX design et développement web et mobile pour élaborer des sites internet extrêmement performants. Notre secret ? Mettre en collaboration des individus talentueux, motivés pour relever des défis audacieux au service de l'expérience utilisateur (UX) et du retour sur investissement (ROI).",
    },
  ];
  const referencesCardContent = [
    {
        id: 1,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 2,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: ComputerPhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 3,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: Tablet,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 4,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 5,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 6,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 7,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 8,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: ComputerPhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 9,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: Tablet,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 10,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 11,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
    {
        id: 12,
        title: 'Créer votre e-commerce et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: DoublePhone,
        client: "Nom Client",
        subtitle: "Augmenter les ventes de produit en ligne en créant une expérience sur-mesure."
    },
  ];
  const expertisesCardContent = [
		{
		title: 'UX Design',
		content: [
			{
			number: '01',  
			title: 'Etudes et conseil UX',
			text: 'Questionnez vos utilisateurs pour comprendre ce qu’ils souhaitent afin d’augmenter votre rétention.',
			buttonText: 'En savoir plus',
			bgClass: 'bg-green-300',
			titleClass: 'text-black',
			textClass: 'text-black',
			btnClass: 'border-gray-700 text-gray-700',
			btnHoverClass: 'bg-gray-700 text-white',
			},
			{
			number: '02',
			title: 'UX design et conception',
			text: 'Concevez des interfaces intuitives, percutantes et adaptées pour vos utilisateurs.',
			buttonText: 'En savoir plus',
			bgClass: 'bg-pink-300',
			titleClass: 'text-black',
			textClass: 'text-black',
			btnClass: 'border-gray-700 text-gray-700',
			btnHoverClass: 'bg-gray-700 text-white',
			},
		],
		},
		{
		title: 'Développement',
		content: [
			{
			number: '03',
			title: 'Développement web & app',
			text: 'Optez pour les bonnes technologies et réalisez un site sécurisé et performant qui séduira vos clients.',
			buttonText: 'En savoir plus',
			bgClass: 'bg-gray-200',
			titleClass: 'text-black',
			textClass: 'text-black',
			btnClass: 'border-gray-700 text-gray-700',
			btnHoverClass: 'bg-gray-700 text-white',
			},
			{
			number: '04',
			title: 'Audit technique & TMA',
			text: 'Analysez votre site et améliorez ses performances afin d’accroître la satisfaction client.',
			buttonText: 'En savoir plus',
			bgClass: 'bg-yellow-300',
			titleClass: 'text-black',
			textClass: 'text-black',
			btnClass: 'border-gray-700 text-gray-700',
			btnHoverClass: 'bg-gray-700 text-white',
			},
		],
		},
	];
  const heroActionContent = {
    title: "Augmentez votre chiffre d'affaire en créant un site web adapté pour vos clients",
    subtitle: "En utilisant une démarche UX design, vous augmenterez considérablement vos taux de conversion et de rétention.",
    actions: [
      { text: 'Créer son expérience digitale', link: '/lien-1' },
      { text: 'Créer son site web', link: '/lien-2' },
      { text: 'Contacter nous', link: '/lien-3' },
    ]
  };
  const testimonialsContent = [
    {
        avatar: Avatar,
        text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
        logo: Airbnb,
    },
    {
        avatar: Avatar,
        text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
        logo: Airbnb,
    },
    {
        avatar: Avatar,
        text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
        logo: Airbnb,
    },
    {
        avatar: Avatar,
        text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
        logo: Airbnb,
    },
    {
        avatar: Avatar,
        text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
        logo: Airbnb,
    },
    {
        avatar: Avatar,
        text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
        logo: Airbnb,
    },
    {
        avatar: Avatar,
        text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
        logo: Airbnb,
    },
    {
        avatar: Avatar,
        text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
        logo: Airbnb,
    },
    {
        avatar: Avatar,
        text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
        logo: Airbnb,
    },
    {
        avatar: Avatar,
        text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
        logo: Airbnb,
    },
];

  return (
    <>
      <HeroBanner {...heroBannerContent} />
      <Solutions 
        solutionsIntroContent={solutionsIntroContent}
        solutionsCardContent={solutionsCardContent}
      />
      <References 
        referencesIntroContent={referencesIntroContent} 
        referencesCardContent={referencesCardContent} 
      />
      <Expertises {...expertisesCardContent}/>
      <Testimonials slides={testimonialsContent} />
      <HeroAction {...heroActionContent} />
      <Collapsible/>
    </>
  );
}

const COLLECTION_CONTENT_FRAGMENT = `#graphql
  ${MEDIA_FRAGMENT}
  fragment CollectionContent on Collection {
    id
    handle
    title
    descriptionHtml
    heading: metafield(namespace: "hero", key: "title") {
      value
    }
    byline: metafield(namespace: "hero", key: "byline") {
      value
    }
    cta: metafield(namespace: "hero", key: "cta") {
      value
    }
    spread: metafield(namespace: "hero", key: "spread") {
      reference {
        ...Media
      }
    }
    spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
      reference {
        ...Media
      }
    }
  }
`;
const HOMEPAGE_SEO_QUERY = `#graphql
  ${COLLECTION_CONTENT_FRAGMENT}
  query collectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    hero: collection(handle: $handle) {
      ...CollectionContent
    }
    shop {
      name
      description
    }
  }
`;
const COLLECTION_HERO_QUERY = `#graphql
  ${COLLECTION_CONTENT_FRAGMENT}
  query collectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    hero: collection(handle: $handle) {
      ...CollectionContent
    }
  }
`;
// @see: https://shopify.dev/api/storefront/2023-04/queries/products
export const HOMEPAGE_FEATURED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query homepageFeaturedProducts($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: 8) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
// @see: https://shopify.dev/api/storefront/2023-04/queries/collections
export const FEATURED_COLLECTIONS_QUERY = `#graphql
  query homepageFeaturedCollections($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    collections(
      first: 4,
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;