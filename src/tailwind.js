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
export default plugin.withOptions(() => ({ addComponents, theme }) => {
  addComponents({
    '.button': {
      '@apply inline-flex items-center justify-center text-center h-fit': {},
      ...theme('components.button'),
      padding: `${theme('components.button.padding.top')} ${theme('components.button.padding.right')} ${theme('components.button.padding.bottom')} ${theme('components.button.padding.left')}`,

      // Icon styling
      '.button-icon': {
        '@apply block': {},
        ...theme('components.button.icon'),
      },

      // Color variants
      '&.button-primary': {
        ...theme('components.button.primary'),

        '&:hover': {
          ...theme('components.button.primary.hover'),
        },
      },
      '&.button-secondary': {
        ...theme('components.button.secondary'),

        '&:hover': {
          ...theme('components.button.secondary.hover'),
        },
      },
      '&.button-tertiary': {
        ...theme('components.button.tertiary'),

        '&:hover': {
          ...theme('components.button.tertiary.hover'),
        },
      },
      '&.button-light': {
        ...theme('components.button.light'),

        '&:hover': {
          ...theme('components.button.light.hover'),
        },
      },
      '&.button-dark': {
        ...theme('components.button.dark'),

        '&:hover': {
          ...theme('components.button.dark.hover'),
        },
      },
      '&.button-danger': {
        ...theme('components.button.danger'),

        '&:hover': {
          ...theme('components.button.danger.hover'),
        },
      },
      '&.button-warning': {
        ...theme('components.button.warning'),

        '&:hover': {
          ...theme('components.button.warning.hover'),
        },
      },
      '&.button-success': {
        ...theme('components.button.success'),

        '&:hover': {
          ...theme('components.button.success.hover'),
        },
      },
      '&.button-clear': {
        '@apply bg-transparent px-0': {},
        ...theme('components.button.clear'),

        '&:hover': {
          ...theme('components.button.clear.hover'),
        },
      },

      // Size variants
      '&.button-xs': {
        padding: `${theme('components.button.xs.padding.top')} ${theme('components.button.xs.padding.right')} ${theme('components.button.xs.padding.bottom')} ${theme('components.button.xs.padding.left')}`,
        gap: theme('components.button.xs.gap'),
        borderRadius: theme('components.button.xs.borderRadius'),
        fontWeight: theme('components.button.xs.fontWeight'),
        fontSize: theme('components.button.xs.fontSize'),

        '.button-icon': {
          ...theme('components.button.xs.icon'),
        },
      },
      '&.button-sm': {
        padding: `${theme('components.button.sm.padding.top')} ${theme('components.button.sm.padding.right')} ${theme('components.button.sm.padding.bottom')} ${theme('components.button.sm.padding.left')}`,
        gap: theme('components.button.sm.gap'),
        borderRadius: theme('components.button.sm.borderRadius'),
        fontWeight: theme('components.button.sm.fontWeight'),
        fontSize: theme('components.button.sm.fontSize'),

        '.button-icon': {
          ...theme('components.button.sm.icon'),
        },
      },
      '&.button-lg': {
        padding: `${theme('components.button.lg.padding.top')} ${theme('components.button.lg.padding.right')} ${theme('components.button.lg.padding.bottom')} ${theme('components.button.lg.padding.left')}`,
        gap: theme('components.button.lg.gap'),
        borderRadius: theme('components.button.lg.borderRadius'),
        fontWeight: theme('components.button.lg.fontWeight'),
        fontSize: theme('components.button.lg.fontSize'),

        '.button-icon': {
          ...theme('components.button.lg.icon'),
        },
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
        borderRadius: '0.75rem',
        fontWeight: '400',
        fontSize: '1rem',
        whiteSpace: 'normal',

        // Icon styling
        icon: {
          fill: 'currentColor',
          width: '1.25rem',
          height: '1.25rem',
          flexShrink: '0',
        },

        // Color variants
        primary: {
          backgroundColor: '#007bff',
          color: '#fff',
          hover: {
            backgroundColor: '#0056b3',
            color: '#fff',
          },
        },
        secondary: {
          backgroundColor: '#6c757d',
          color: '#fff',
          hover: {
            backgroundColor: '#6c757d',
            color: '#fff',
          },
        },
        tertiary: {
          backgroundColor: '#1cffee',
          color: '#000',
          hover: {
            backgroundColor: '#1cffee',
            color: '#000',
          },
        },
        light: {
          backgroundColor: '#f8f9fa',
          color: '#212529',
          hover: {
            backgroundColor: '#f8f9fa',
            color: '#212529',
          },
        },
        dark: {
          backgroundColor: '#343a40',
          color: '#fff',
          hover: {
            backgroundColor: '#343a40',
            color: '#fff',
          },
        },
        danger: {
          backgroundColor: '#dc3545',
          color: '#fff',
          hover: {
            backgroundColor: '#dc3545',
            color: '#fff',
          },
        },
        warning: {
          backgroundColor: '#ffc107',
          color: '#212529',
          hover: {
            backgroundColor: '#ffc107',
            color: '#212529',
          },
        },
        success: {
          backgroundColor: '#28a745',
          color: '#fff',
          hover: {
            backgroundColor: '#28b845',
            color: '#fff',
          },
        },
        clear: {
          color: '#000000',
          hover: {
            color: '#4b4b4b',
          },
        },

        // Size variants
        xs: {
          padding: {
            top: '0.25rem',
            right: '0.75rem',
            bottom: '0.25rem',
            left: '0.75rem',
          },
          gap: '0.125rem',
          fontSize: '0.75rem',
          borderRadius: '0.5rem',
          icon: {
            width: '0.75rem',
            height: '.75rem',
          },
        },
        sm: {
          padding: {
            top: '0.5rem',
            right: '1rem',
            bottom: '0.5rem',
            left: '1rem',
          },
          gap: '0.25rem',
          fontSize: '0.875rem',
          borderRadius: '0.5rem',
          icon: {
            width: '1rem',
            height: '1rem',
          },
        },
        lg: {
          padding: {
            top: '1rem',
            right: '2rem',
            bottom: '1rem',
            left: '2rem',
          },
          gap: '0.75rem',
          fontSize: '1.25rem',
          borderRadius: '1rem',
          icon: {
            width: '1.5rem',
            height: '1.5rem',
          },
        },
      },
    },
  },
}));
