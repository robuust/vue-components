import plugin from 'tailwindcss/plugin';

// Components
import button from './components/button.js';

/**
 * Tailwind Theme plugin
 *
 * @type {import('tailwindcss').Plugin}
 *
 * @param {import('tailwindcss').AddComponents} addComponents
 * @param {import('tailwindcss').Theme} theme
 *
 * @returns {void}
 */
export default plugin.withOptions(() => ({ addComponents, theme }) => {
  addComponents({
    ...button(theme),
  });
});
