import plugin from 'tailwindcss/plugin';

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
export default plugin(() => ({ addComponents, theme }) => {
  addComponents({
    '.button': {
      '@apply inline-flex items-center justify-center text-center': {},
      color: theme('components.button.primary.color'),
      padding: `${theme('components.button.padding.top')} ${theme('components.button.padding.right')} ${theme('components.button.padding.bottom')} ${theme('components.button.padding.left')}`,
      gap: theme('components.button.gap'),
      borderRadius: theme('components.button.borderRadius'),
      fontWeight: theme('components.button.fontWeight'),
      fontSize: theme('components.button.fontSize'),
      whiteSpace: theme('components.button.whiteSpace'),

      // Color variants
      '&.button-primary': {
        color: theme('components.button.primary.color'),
        backgroundColor: theme('components.button.primary.backgroundColor'),
      },
      '&.button-secondary': {
        color: theme('components.button.secondary.color'),
        backgroundColor: theme('components.button.secondary.backgroundColor'),
      },
      '&.button-tertiary': {
        color: theme('components.button.tertiary.color'),
        backgroundColor: theme('components.button.tertiary.backgroundColor'),
      },
      '&.button-light': {
        color: theme('components.button.light.color'),
        backgroundColor: theme('components.button.light.backgroundColor'),
      },
      '&.button-dark': {
        color: theme('components.button.dark.color'),
        backgroundColor: theme('components.button.dark.backgroundColor'),
      },
      '&.button-danger': {
        color: theme('components.button.danger.color'),
        backgroundColor: theme('components.button.danger.backgroundColor'),
      },
      '&.button-warning': {
        color: theme('components.button.warning.color'),
        backgroundColor: theme('components.button.warning.backgroundColor'),
      },
      '&.button-success': {
        color: theme('components.button.success.color'),
        backgroundColor: theme('components.button.success.backgroundColor'),
      },
      '&.button-clear': {
        '@apply bg-transparent px-0': {},
        color: theme('components.button.clear.color'),
      },

      // Size variants
      '&.button-xs': {
        padding: `${theme('components.button.xs.padding.top')} ${theme('components.button.xs.padding.right')} ${theme('components.button.xs.padding.bottom')} ${theme('components.button.xs.padding.left')}`,
        gap: theme('components.button.xs.gap'),
        borderRadius: theme('components.button.xs.borderRadius'),
        fontWeight: theme('components.button.xs.fontWeight'),
        fontSize: theme('components.button.xs.fontSize'),
      },
      '&.button-sm': {
        padding: `${theme('components.button.sm.padding.top')} ${theme('components.button.sm.padding.right')} ${theme('components.button.sm.padding.bottom')} ${theme('components.button.sm.padding.left')}`,
        gap: theme('components.button.sm.gap'),
        borderRadius: theme('components.button.sm.borderRadius'),
        fontWeight: theme('components.button.sm.fontWeight'),
        fontSize: theme('components.button.sm.fontSize'),
      },
      '&.button-lg': {
        padding: `${theme('components.button.lg.padding.top')} ${theme('components.button.lg.padding.right')} ${theme('components.button.lg.padding.bottom')} ${theme('components.button.lg.padding.left')}`,
        gap: theme('components.button.lg.gap'),
        borderRadius: theme('components.button.lg.borderRadius'),
        fontWeight: theme('components.button.lg.fontWeight'),
        fontSize: theme('components.button.lg.fontSize'),
      },

      // Icon styling
      '.button-icon': {
        '@apply block': {},
        fill: 'currentColor',
        width: '1.5rem',
        height: '1.5rem',
        flexShrink: '0',
      },
    },
  });
}, () => ({
  theme: {
    components: {
      button: {
        // Default styles
        padding: {
          top: '0.75rem',
          right: '1.5rem',
          bottom: '0.75rem',
          left: '1.5rem',
        },
        gap: '0.5rem',
        borderRadius: '9999px',
        fontWeight: '500',
        fontSize: '1rem',
        whiteSpace: 'normal',

        // Color variants
        primary: {
          backgroundColor: '#3490dc',
          color: '#fff',
        },
        secondary: {
          backgroundColor: '#6c757d',
          color: '#fff',
        },
        tertiary: {
          backgroundColor: '#e9ecef',
          color: '#212529',
        },
        light: {
          backgroundColor: '#f8f9fa',
          color: '#212529',
        },
        dark: {
          backgroundColor: '#343a40',
          color: '#fff',
        },
        danger: {
          backgroundColor: '#dc3545',
          color: '#fff',
        },
        warning: {
          backgroundColor: '#ffc107',
          color: '#212529',
        },
        success: {
          backgroundColor: '#28a745',
          color: '#fff',
        },
        clear: {
          color: '#000000',
        },

        // Size variants
        xs: {
          padding: {
            top: '0.25rem',
            right: '0.5rem',
            bottom: '0.25rem',
            left: '0.5rem',
          },
          gap: '0.125rem',
          borderRadius: '9999px',
          fontWeight: '400',
          fontSize: '0.75rem',
        },
        sm: {
          padding: {
            top: '0.5rem',
            right: '1rem',
            bottom: '0.5rem',
            left: '1rem',
          },
          gap: '0.25rem',
          borderRadius: '9999px',
          fontWeight: '400',
          fontSize: '0.875rem',
        },
        lg: {
          padding: {
            top: '1rem',
            right: '2rem',
            bottom: '1rem',
            left: '2rem',
          },
          gap: '0.75rem',
          borderRadius: '9999px',
          fontWeight: '500',
          fontSize: '1.25rem',
        },
      },
    },
  },
}));
