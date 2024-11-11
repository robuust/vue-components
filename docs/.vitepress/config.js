// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Robuust Components',
  description: '',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/guide' },
      { text: 'Components', link: '/components' },
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'ButtonBase', link: '/components/button-base' },
        ],
      },
    ],

    logo: '/logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/robuust/vue-components' },
    ],
  },
});
