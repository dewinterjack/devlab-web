import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#88aaee',
        mainAccent: '#4d80e6', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)',

        // light mode
        bg: '#dfe5f2',
        text: '#000',
        border: '#000',

        // dark mode
        darkBg: '#272933',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color
      },
      borderRadius: {
        base: '3px',
      },
      boxShadow: {
        light: '3px -3px 0px 0px #000',
        dark: '3px -3px 0px 0px #000',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '-4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '4px',
      },
      fontWeight: {
        base: '400',
        heading: '600',
      },
      screens: {
        w450: { raw: '(max-width: 450px)' },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
