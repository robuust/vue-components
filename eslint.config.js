/* eslint-disable import/no-extraneous-dependencies */
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

const compat = new FlatCompat();

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**', '**/docs/.vitepress/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...compat.extends('@vue/eslint-config-airbnb'),
  ...compat.env({ jest: true }),

  {
    languageOptions: {
      globals: {
        vi: false,
      },
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'max-len': 'off',
      'vue/max-len': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/html-button-has-type': 'off',
      'vue/no-v-html': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        },
      ],
      'import/no-unresolved': [2, { ignore: ['^\\#imports$', '^\\#components$', '^@\\/*', '^swiper\\/'] }],
      'import/extensions': ['error', 'always', { ignorePackages: true }],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
    },
  },
];
