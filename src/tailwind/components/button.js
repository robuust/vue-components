/**
 * Button component
 *
 * @param {Object} theme - The global theme object
 */
export default (theme) => {
  const customColors = theme('components.button.custom') || {};
  const customColorStyles = Object.keys(customColors).reduce((acc, colorName) => {
    acc[`&.button-custom-${colorName}`] = {
      backgroundColor: customColors[colorName].backgroundColor,
      color: customColors[colorName].color,
      ...customColors[colorName].styles,
      '&:hover': {
        backgroundColor: customColors[colorName].hoverBackgroundColor,
        color: customColors[colorName].hoverColor,
        ...customColors[colorName].hoverStyles,
      },
    };
    return acc;
  }, {});

  return {
    '.button': {
      '@apply inline-flex items-center justify-center text-center h-fit border border-transparent relative': {},
      paddingTop: theme('padding.2'),
      paddingRight: theme('padding.4'),
      paddingBottom: theme('padding.2'),
      paddingLeft: theme('padding.4'),
      gap: theme('gap.2'),
      borderRadius: theme('borderRadius.xl'),
      fontWeight: theme('fontWeight.medium'),
      fontSize: theme('fontSize.base'),
      whiteSpace: theme('whitespace.normal'),
      transitionProperty: theme('transitionProperty.colors'),
      transitionDuration: theme('transitionDuration.300'),
      transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
      ...theme('components.button'),

      // Icon styling
      '.button-icon': {
        '@apply block': {},
        fill: theme('fill.current'),
        width: theme('width.5'),
        height: theme('height.5'),
        flexShrink: theme('flexShrink.0'),
        ...theme('components.button.icon'),
      },

      // Color variants
      '&.button-primary': {
        backgroundColor: theme('colors.lime.400'),
        color: theme('colors.black'),
        ...theme('components.button.primary'),

        '&:hover': {
          backgroundColor: theme('colors.lime.600'),
          color: theme('colors.black'),
          ...theme('components.button.primary.hover'),
        },
      },
      '&.button-primary-soft': {
        backgroundColor: theme('colors.lime.200'),
        color: theme('colors.lime.600'),
        ...theme('components.button.primary-soft'),

        '&:hover': {
          backgroundColor: theme('colors.lime.300'),
          color: theme('colors.700'),
          ...theme('components.button.primary-soft.hover'),
        },
      },
      '&.button-secondary': {
        backgroundColor: theme('colors.indigo.400'),
        color: theme('colors.white'),
        ...theme('components.button.secondary'),

        '&:hover': {
          backgroundColor: theme('colors.indigo.600'),
          color: theme('colors.white'),
          ...theme('components.button.secondary.hover'),
        },
      },
      '&.button-secondary-soft': {
        backgroundColor: theme('colors.indigo.200'),
        color: theme('colors.indigo.600'),
        ...theme('components.button.secondary-soft'),

        '&:hover': {
          backgroundColor: theme('colors.indigo.300'),
          color: theme('colors.700'),
          ...theme('components.button.secondary-soft.hover'),
        },
      },
      '&.button-tertiary': {
        backgroundColor: theme('colors.orange.400'),
        color: theme('colors.black'),
        ...theme('components.button.tertiary'),

        '&:hover': {
          backgroundColor: theme('colors.orange.600'),
          color: theme('colors.black'),
          ...theme('components.button.tertiary.hover'),
        },
      },
      '&.button-tertiary-soft': {
        backgroundColor: theme('colors.orange.200'),
        color: theme('colors.orange.600'),
        ...theme('components.button.tertiary-soft'),

        '&:hover': {
          backgroundColor: theme('colors.orange.300'),
          color: theme('colors.700'),
          ...theme('components.button.tertiary-soft.hover'),
        },
      },
      '&.button-light': {
        backgroundColor: theme('colors.white'),
        color: theme('colors.stone.800'),
        borderColor: theme('colors.stone.300'),
        ...theme('components.button.light'),

        '&:hover': {
          backgroundColor: theme('colors.stone.100'),
          color: theme('colors.stone.900'),
          ...theme('components.button.light.hover'),
        },
      },
      '&.button-dark': {
        backgroundColor: theme('colors.black'),
        color: theme('colors.white'),
        ...theme('components.button.dark'),

        '&:hover': {
          backgroundColor: theme('colors.stone.800'),
          color: theme('colors.white'),
          ...theme('components.button.dark.hover'),
        },
      },
      '&.button-danger': {
        backgroundColor: theme('colors.red.600'),
        color: theme('colors.white'),
        ...theme('components.button.danger'),

        '&:hover': {
          backgroundColor: theme('colors.red.700'),
          color: theme('colors.white'),
          ...theme('components.button.danger.hover'),
        },
      },
      '&.button-danger-soft': {
        backgroundColor: theme('colors.red.200'),
        color: theme('colors.red.600'),
        ...theme('components.button.danger-soft'),

        '&:hover': {
          backgroundColor: theme('colors.red.300'),
          color: theme('colors.700'),
          ...theme('components.button.danger-soft.hover'),
        },
      },
      '&.button-warning': {
        backgroundColor: theme('colors.yellow.400'),
        color: theme('colors.black'),
        ...theme('components.button.warning'),

        '&:hover': {
          backgroundColor: theme('colors.yellow.300'),
          color: theme('colors.black'),
          ...theme('components.button.warning.hover'),
        },
      },
      '&.button-warning-soft': {
        backgroundColor: theme('colors.yellow.200'),
        color: theme('colors.yellow.600'),
        ...theme('components.button.warning-soft'),

        '&:hover': {
          backgroundColor: theme('colors.yellow.300'),
          color: theme('colors.700'),
          ...theme('components.button.warning-soft.hover'),
        },
      },
      '&.button-success': {
        backgroundColor: theme('colors.green.500'),
        color: theme('colors.white'),
        ...theme('components.button.success'),

        '&:hover': {
          backgroundColor: theme('colors.green.700'),
          color: theme('colors.white'),
          ...theme('components.button.success.hover'),
        },
      },
      '&.button-success-soft': {
        backgroundColor: theme('colors.green.200'),
        color: theme('colors.green.600'),
        ...theme('components.button.success-soft'),

        '&:hover': {
          backgroundColor: theme('colors.green.300'),
          color: theme('colors.700'),
          ...theme('components.button.success-soft.hover'),
        },
      },
      '&.button-clear': {
        '@apply bg-transparent px-0': {},
        color: theme('colors.stone.600'),
        ...theme('components.button.clear'),

        '&:hover': {
          color: theme('colors.stone.800'),
          ...theme('components.button.clear.hover'),
        },
      },
      ...customColorStyles,

      // Size variants
      '&.button-xs': {
        paddingTop: theme('padding.1'),
        paddingRight: theme('padding.2'),
        paddingBottom: theme('padding.1'),
        paddingLeft: theme('padding.2'),
        gap: theme('gap[1.5]'),
        borderRadius: theme('borderRadius.md'),
        fontWeight: theme('fontWeight.medium'),
        fontSize: theme('fontSize.xs'),
        ...theme('components.button.xs'),

        '.button-icon': {
          width: theme('width.3'),
          height: theme('height.3'),
          ...theme('components.button.xs.icon'),
        },
      },
      '&.button-sm': {
        paddingTop: theme('padding[1.5]'),
        paddingRight: theme('padding.3'),
        paddingBottom: theme('padding[1.5]'),
        paddingLeft: theme('padding.3'),
        gap: theme('gap.2'),
        borderRadius: theme('borderRadius.lg'),
        fontWeight: theme('fontWeight.medium'),
        fontSize: theme('fontSize.sm'),
        ...theme('components.button.sm'),

        '.button-icon': {
          width: theme('width.4'),
          height: theme('height.4'),
          ...theme('components.button.sm.icon'),
        },
      },
      '&.button-lg': {
        paddingTop: theme('padding[2.5]'),
        paddingRight: theme('padding.6'),
        paddingBottom: theme('padding[2.5]'),
        paddingLeft: theme('padding.6'),
        gap: theme('gap.4'),
        borderRadius: theme('borderRadius.2xl'),
        fontWeight: theme('fontWeight.medium'),
        fontSize: theme('fontSize.lg'),
        ...theme('components.button.lg'),

        '.button-icon': {
          width: theme('width.6'),
          height: theme('height.6'),
          ...theme('components.button.lg.icon'),
        },
      },
    },
  };
};
