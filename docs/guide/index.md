# Getting started

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>=18.x)

### Install the package :package:

::: code-group

```bash [npm]
npm install @robuust-digital/vue-components
```

```bash [yarn]
yarn add @robuust-digital/vue-components
```

:::

## Tailwind CSS Integration

Add the component library plugin to your `tailwind.config.js`:


```javascript
import components from '@robuust-digital/vue-components/tailwind';

export default {
  theme: {
    extend: {
      // Customize component styles here
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
```

::: tip Example Tailwind Configuration
With this configuration, you can create a custom theme for all components. Each project can apply its own colors and style variants by simply adjusting these values.
:::

## For Nuxt 3 Projects

Add the module to your `nuxt.config.ts` or `nuxt.config.js:`

```javascript
export default defineNuxtConfig({
  modules: ['@robuust-digital/vue-components/nuxt'],
});
```

::: tip Registering components globally
This will automatically register all components globally in your Nuxt application, making them available for immediate use.
:::
