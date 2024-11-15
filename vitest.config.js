/* eslint-disable import/no-unresolved */
import path from 'node:path';
import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    Vue(),
    svgLoader(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/unit/index.js'],
    coverage: {
      enabled: true,
      all: true,
      checkCoverage: true,
      thresholds: {
        lines: 100,
      },
      reporter: ['text', 'html'],
      include: ['src/**.vue', 'src/**/**.vue'],
    },
  },
});
