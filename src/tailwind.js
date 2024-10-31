import plugin from 'tailwindcss/plugin';

/**
 * Tailwind Theme plugin
 *
 * @type {import('tailwindcss').Plugin}
 *
 * @param {import('tailwindcss').AddComponents} addComponents
 * @param {import('tailwindcss').Theme} theme
 * @param {import('tailwindcss').PluginUtils} plugin
 * @param {import('tailwindcss').Context} context
 *
 * @returns {void}
 */
export default plugin.withOptions((options) => ({ addComponents, theme }) => {
  addComponents({
    '.button': {
      '@apply inline-flex items-center gap-2': {},
      color: theme('components.button.primary.color'),
      '&.button-primary': {
        color: theme('components.button.primary.color'),
        backgroundColor: theme('components.button.primary.backgroundColor'),
      },
      '&.button-secondary': {
        color: theme('components.button.secondary.color'),
        backgroundColor: theme('components.button.secondary.backgroundColor'),
      },
    },
  });
}, () => ({
  theme: {
    components: {
      button: {
        primary: {
          backgroundColor: '#3490dc',
          color: '#fff',
        },
        secondary: {
          backgroundColor: '#6c757d',
          color: '#fff',
        },
      },
    },
  },
}));
