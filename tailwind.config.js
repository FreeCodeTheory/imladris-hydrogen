import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

function withOpacityValue(variable) {
  return ({opacityValue}) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: withOpacityValue('--color-primary'),
        contrast: withOpacityValue('--color-contrast'),
        notice: withOpacityValue('--color-accent'),
        shopPay: 'var(--color-shop-pay)',
        'blue-50': '#7089FA',
        'blue-100': '#2143E6',
        'blue-200': '#1A36B8',
        'gray-50': '#FFFFFF',
        'gray-100': '#F6F6F6',
        'gray-200': '#EDEDED',
        'gray-900': '#100F10',
        'green-50': '#E2F87F',
        'green-100': '#D0EA59',
        'pink-200': '#D959AF', 
        'pink-300': '#D90368',
        'red-200': '#FF7967',
        'yellow-400': '#EBAC00',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        'sm-max': {max: '768px'},
        'sm-only': {min: '640px', max: '768px'},
        'md-only': {min: '768px', max: '1024px'},
        'lg-only': {min: '1024px', max: '1280px'},
        'xl-only': {min: '1280px', max: '1536px'},
        '2xl-only': {min: '1536px'},
      },
      spacing: {
        nav: 'var(--height-nav)',
        screen: 'var(--screen-height, 100vh)',
      },
      height: {
        screen: 'var(--screen-height, 100vh)',
        'screen-no-nav':
          'calc(var(--screen-height, 100vh) - var(--height-nav))',
          'screen-dynamic': 'var(--screen-height-dynamic, 100vh)',
      },
      width: {
        mobileGallery: 'calc(100vw - 3rem)',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"IBMPlexSerif"', 'Palatino', 'ui-serif'],
      },
      fontSize: {
        display: ['var(--font-size-display)', '1.1'],
        heading: ['var(--font-size-heading)', '1.25'],
        lead: ['var(--font-size-lead)', '1.333'],
        copy: ['var(--font-size-copy)', '1.5'],
        fine: ['var(--font-size-fine)', '1.333'],
      },
      maxWidth: {
        'prose-narrow': '45ch',
        'prose-wide': '80ch',
      },
      boxShadow: {
        border: 'inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)',
        darkHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)',
        lightHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)',
        '100': '0px 80px 120px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [formsPlugin, typographyPlugin],
};
