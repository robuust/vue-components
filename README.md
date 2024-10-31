# @rutgerbakker95/vue-components

A modern and customizable component library built with **Vue 3** and **Tailwind CSS**, designed to deliver a flexible, cohesive UI experience across all projects. Quickly integrate reusable components with ease, and customize them to suit your unique branding needs.

## Features

- **Vue 3 Components**: Carefully crafted components that work seamlessly with Vue 3 ✨
- **Tailwind CSS Integration**: Leverage Tailwind CSS for styling, with full theme customization support 💎
- **Theming & Customization**: Tailor components to your project’s branding directly from the `tailwind.config.js` 🚀
- **Accessibility First**: Components are designed with accessibility in mind, ensuring compliance with best practices 🖖🏽

## Installation

1. **Install the component library via yarn:**

```bash
yarn add @rutgerbakker95/vue-components
```

2. **Add the component library plugin to your `tailwind.config.js`:**

```javascript
// tailwind.config.js
import components from '@rutgerbakker95/vue-components/src/tailwind';

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

## Usage

Import and use components in your Vue 3 project with ease. Here’s an example of how to use the `ButtonBase` component:

```vue
<template>
  <ButtonBase color="primary" label="Click Me" />
</template>

<script setup>
import { ButtonBase } from '@rutgerbakker95/vue-components';
</script>
```

### Props

- `label`: `String` – Button text label. Default is an empty string.
- `color`: `String` – Button color, accepts primary, secondary, or light. Default is primary.
- `as`: `String | Object | Function` – Render as a different component (e.g., NuxtLink or a). Default is `button`.

## Customizing with Tailwind CSS

Tailor component styles by overriding default values in `tailwind.config.js`. This allows you to establish a consistent design system across projects:

```javascript
// tailwind.config.js
module.exports = {
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
};
```

### Example Tailwind Configuration

With this configuration, you can create a custom theme for buttons and other components. Each project can apply its own colors and style variants by simply adjusting these values.

## Development

To contribute or make adjustments:

1. **Clone the repository** and install dependencies:

```bash
git clone https://github.com/rutgerbakker95/vue-components.git
cd component-library
yarn install
```

2. **Run the development server** to preview components:

```bash
yarn dev
```

3. **Build for production**:

```bash
yarn build
```


## License

MIT © Rutger Bakker


*With `@rutgerbakker95/vue-components`, bring consistency, flexibility, and a polished look to all your Vue 3 applications.*
