import components from './src/tailwind/index.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      // components: (theme) => ({
      //   button: {
      //     primary: {
      //       backgroundColor: theme('colors.red.500'),
      //       color: '#000',
      //     },
      //     secondary: {
      //       backgroundColor: theme('colors.blue.500'),
      //       color: '#fff',
      //     },
      //     clear: {
      //       color: theme('colors.gray.500'),
      //     },
      //   },
      // }),
    },
  },
  plugins: [components],
};
