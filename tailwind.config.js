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
              hover: {
                backgroundColor: theme('colors.pink.600'),
                color: theme('colors.white'),
              },
            },
            bar: {
              backgroundColor: theme('colors.teal.500'),
              color: theme('colors.white'),
              hover: {
                backgroundColor: theme('colors.teal.600'),
                color: theme('colors.white'),
              },
              icon: {
                color: theme('colors.black'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [components],
};
