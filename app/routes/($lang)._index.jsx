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

import phone from '../assets/phone.svg';

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
    image: phone,
    width: 100,
    mb: -32,
    mr: -14
  };
  const solutionIntroContent = [
    {
      id: 1,
      category: 'Solutions',
      title: 'Créer votre solution et atteignez vos objectifs commerciaux et marketing',
      subtitle: "Notre agence web imagine des expériences digitales pertinentes pour vos utilisateurs et pour votre business. Que ce soit pour la création ou la refonte d'un site web, d'une application mobile, d’un site e-commerce, d’un site Shopify ou d'une progressive web app, nos spécialistes en UX Design, design d'interfaces, développement web et mobile conçoivent votre site en plaçant l'utilisateur au cœur de la démarche.",
    },
  ];
  const solutionCardContent = [
    {
        id: 1,
        title: 'Ux Design',
        text1: 'Optimiser et améliorer l’',
        textColor: 'Ux Design ',
        text2: ' de votre projet et booster votre business',
        button: 'En savoir plus',
        image: BlueIcon,
    },
    {
        id: 2,
        title: 'Design System',
        text1: 'Créer votre ',
        textColor: 'Design System ',
        text2: 'dans un budget maîtrisé et améliorer votre productivité',
        button: 'En savoir plus',
        image: PurpleIcon,
    },
    {
        id: 3, 
        title: 'MvP / Prototype',
        text1: 'Créer votre ',
        textColor: 'MvP / Prototype ',
        text2: 'dans un budget maîtrisé et propulser votre marque',
        button: 'En savoir plus',
        image: YellowIcon,
    },
    {
        id: 4,
        title: 'Site Web',
        text1: 'Créer un ',
        textColor: 'Site Web ',
        text2: 'et augmentez vos taux de conversions et rétention',
        button: 'En savoir plus',
        image: PinkIcon,
    },
    {
        id: 5,
        title: 'e-Commerce Shopify',
        text1: 'Créer votre ',
        textColor: 'e-Commerce Shopify ',
        text2: 'et booster les ventes de votre marque',
        button: 'En savoir plus',
        image: GreenIcon,
    },
    {
        id: 6,
        title: 'Progressive Web App',
        text1: 'Créer votre ',
        textColor: 'Progressive Web App ',
        text2: 'et augmentez votre satisfaction client',
        button: 'En savoir plus',
        image: RedIcon,
    },
  ];
  const heroActionContent = {
    title: "Augmentez votre chiffre d'affaire en créant un site web adapté pour vos clients",
    subtitle: "En utilisant une démarche UX design, vous augmenterez considérablement vos taux de conversion et de rétention.",
    actions: [
      { text: 'Action 1', link: '/lien-1' },
      { text: 'Action 2', link: '/lien-2' },
      { text: 'Action 3', link: '/lien-3' },
    ]
  };

  return (
    <>
      <HeroBanner {...heroBannerContent} />
      <Solutions 
        solutionIntroContent={solutionIntroContent}
        solutionCardContent={solutionCardContent}
      />
      <References />
      <Expertises />
      <Testimonials />
      <HeroAction {...heroActionContent} />
      <Collapsible />
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