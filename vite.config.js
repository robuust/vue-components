import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import eslintPlugin from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    eslintPlugin(),
    svgLoader(),
    viteStaticCopy({
      targets: [
        { src: 'src/tailwind', dest: '' },
        { src: 'src/nuxt-module.js', dest: '' },
      ],
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'VueComponents',
      fileName: (format) => `vue-components.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
