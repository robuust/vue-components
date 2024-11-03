import { defineNuxtModule, addComponent } from '@nuxt/kit';
import * as components from '@rutgerbakker95/vue-components';
import pkg from '../package.json';

/**
 * Nuxt module to register Vue components globally.
 *
 * @type {import('@nuxt/kit').NuxtModule}
 */
export default defineNuxtModule({
  meta: {
    name: pkg.name,
    configKey: 'vueComponents',
    version: pkg.version,
  },
  setup() {
    Object.keys(components).forEach((name) => {
      addComponent({
        name,
        filePath: '@rutgerbakker95/vue-components',
        export: name,
        global: true,
      });
    });
  },
});
