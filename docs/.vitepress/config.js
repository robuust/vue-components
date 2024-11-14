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
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Contributing', link: '/guide/contributing' }
        ]
      },
      {
        text: 'Components',
        link: '/components/',
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
  rewrites: {
    'guide/index.md': 'guide/getting-started.md',
  }
});
