import components from './src/tailwind.js';

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
            backgroundColor: theme('colors.yellow.500'),
            color: '#000',
          },
          secondary: {
            backgroundColor: theme('colors.blue.500'),
            color: '#fff',
          },
        },
      }),
    },
  },
  plugins: [components],
};
