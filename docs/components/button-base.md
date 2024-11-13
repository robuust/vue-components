# ButtonBase Component

The `ButtonBase` component is a versatile button component designed with **Vue 3** and **Tailwind CSS**. It includes customizable color options, size variants, and additional configuration options to adapt to different use cases.

## Basic Usage

Import and use `ButtonBase` in your Vue components as follows:

```vue
<template>
  <ButtonBase label="Click Me" />
</template>

<script setup>
import { ButtonBase } from '@robuust-digital/vue-components';
</script>
```

<ButtonBase color="primary" label="Click Me" class="margin-y" />

## Props

Below are the props supported by `ButtonBase`, which allow you to customize its appearance and behavior:

| Prop       | Type                            | Default     | Description                                                                 |
|------------|---------------------------------|-------------|-----------------------------------------------------------------------------|
| as         | `String`, `Object`, `Function`  | `button`    | Defines the element type or component to render.                            |
| label      | `String`                        | `''`        | Sets the text label for the button.                                         |
| icon       | `Object`, `Function`            | `null`      | Specifies an icon to display within the button. [@heroicons/vue](https://heroicons.com) can be used, or you can import your own `.svg` files. |
| iconLeft   | `Boolean`                       | `false`     | Displays the icon on the left side of the button text if true.              |
| size       | `String`                        | `base`      | Specifies the button size. Options: `xs`, `sm`, `base`, `lg`.               |
| spinning   | `Boolean`                       | `false`     | Shows a loading spinner in place of the icon when true.                     |
| color      | `String`                        | `primary`   | Sets the button's color variant. Accepts predefined values and custom formats (`primary-soft`, `custom-*`). Learn more about color variants in the [next section](#color-variants). |


## Color Variants

The `color` prop supports both predefined and custom values. Default colors include:

- `primary`
- `secondary`
- `tertiary`
- `light`
- `dark`
- `danger`
- `warning`
- `success`

Additional variants such as `primary-soft` can be created by extending your Tailwind configuration.

::: tip Custom Colors
If you don't find a color variant that suits your needs, you can create custom color variants.

Use `custom-*` color formats to add unique colors directly from your `tailwind.config.js` file.

You can set `backgroundColor`, `color`, `hoverBackgroundColor`, `hoverColor` and additional `styles: {}` and `hoverStyles: {}` within the `custom` key:
:::

## Customization with Tailwind CSS

To customize the button styles globally, extend your Tailwind configuration. Example:

```javascript
// tailwind.config.js
import components from '@robuust-digital/vue-components/tailwind';

export default {
  // ...
  theme: {
    extend: {
      components: (theme) => ({
        button: {
          primary: {
            backgroundColor: theme('colors.yellow.500'),
            color: theme('colors.black'),
          },
          'primary-soft': {
            backgroundColor: theme('colors.yellow.100'),
            color: theme('colors.yellow.600'),
          },
          secondary: {
            backgroundColor: theme('colors.blue.500'),
            color: theme('colors.white'),
            '@apply flex': {},
          },
          custom: {
            foo: {
              backgroundColor: theme('colors.pink.500'),
              color: theme('colors.white'),
              hoverBackgroundColor: theme('colors.pink.600'),
              hoverColor: theme('colors.white'),
              styles: {},
              hoverStyles: {},
            },
          },
        },
      }),
    },
  },
  plugins: [components],
};
```

## Examples

### Basic Button

<ButtonBase color="primary" label="Primary Button" class="margin-y" />

::: details Show code
```vue
<ButtonBase color="primary" label="Primary Button" />
```
:::

### Soft Button

<ButtonBase color="danger-soft" label="Danger Soft Button" class="margin-y" />

::: details Show code
```vue
<ButtonBase color="danger-soft" label="Danger Soft Button" />
```
:::

### Button with Icon

<ButtonBase color="secondary" label="Secondary Button" :icon="BeakerIcon" icon-left class="margin-y" />

::: details Show code
```vue
<ButtonBase color="secondary" label="Secondary Button" :icon="BeakerIcon" icon-left />
```
:::

### Loading Button

Use `spinning` to show a loading spinner:

<ButtonBase color="tertiary" label="Loading Button" :icon="BeakerIcon" spinning class="margin-y" />

::: details Show code
```vue
<ButtonBase color="tertiary" label="Loading Button" :icon="BeakerIcon" spinning />
```
:::

### Custom Button

<ButtonBase color="custom-foo" label="Custom Button" class="margin-y" />

::: details Show code
```vue
<ButtonBase color="custom-foo" label="Custom Button" />
```
:::

## Accessibility

The ButtonBase component is designed with accessibility in mind. Make sure to use appropriate `aria-*` attributes when necessary to enhance usability for all users.

<script setup>
import { ButtonBase } from '@robuust-digital/vue-components';
import { BeakerIcon } from '@heroicons/vue/24/solid';
</script>
