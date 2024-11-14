import components from './src/tailwind/index.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      components: (theme) => ({
        button: {
          primary: {
            backgroundColor: '#d9ff00',
            hover: {
              backgroundColor: '#b6cc00',
            },
          },
          custom: {
            foo: {
              backgroundColor: theme('colors.pink.500'),
              color: theme('colors.white'),
              hoverBackgroundColor: theme('colors.pink.600'),
              hoverColor: theme('colors.white'),
              styles: {},
              hoverStyles: {},
            },
            bar: {
              backgroundColor: theme('colors.teal.500'),
              color: theme('colors.white'),
              hoverBackgroundColor: theme('colors.teal.600'),
              hoverColor: theme('colors.white'),
              styles: {},
              hoverStyles: {},
            },
          },
        },
      }),
    },
  },
  plugins: [components],
};
