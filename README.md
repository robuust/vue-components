# Robuust Vue 3 Components

A modern and customizable component library built with **Vue 3** and **Tailwind CSS**, designed to deliver a flexible, cohesive UI experience across all projects. Quickly integrate reusable components with ease, and customize them to suit your unique branding needs.

## Features

- ✨ **Vue 3 Components**: Carefully crafted components that work seamlessly with Vue 3
- 💎 **Tailwind CSS Integration**: Leverage Tailwind CSS for styling, with full theme customization support
- 🎨 **Theming & Customization**: Tailor components to your project’s branding directly from the `tailwind.config.js`
- 🖖🏽 **Accessibility First**: Components are designed with accessibility in mind, ensuring compliance with best practices
- 📦 **Nuxt 3 module available**: Easily integrate with Nuxt 3 projects for seamless server-side rendering and enhanced performance

## Docs

[**See full docs here**](https://robuust.github.io/vue-components/)

## Installation

1. **Install the component library via yarn or npm:**

```bash
yarn add @robuust-digital/vue-components
```

```bash
npm i @robuust-digital/vue-components
```

2. **Add the component library plugin to your `tailwind.config.js`:**

```javascript
// tailwind.config.js
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

## For Nuxt 3 Projects

**Add the module to your `nuxt.config.ts` or `nuxt.config.js`:**

```javascript
export default defineNuxtConfig({
  modules: ['@robuust-digital/vue-components/nuxt'],
});
```

This will automatically register all components globally in your Nuxt application, making them available for immediate use.

### Example Tailwind Configuration

With this configuration, you can create a custom theme for all components. Each project can apply its own colors and style variants by simply adjusting these values.

## Development

To contribute or make adjustments:

1. **Clone the repository** and install dependencies:

```bash
git clone https://github.com/robuust/vue-components.git
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

MIT © Robuust Digital


*With `@robuust-digital/vue-components`, bring consistency, flexibility, and a polished look to all your Vue 3 applications.*
