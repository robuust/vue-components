import { defineNuxtModule, addComponent } from '@nuxt/kit'
import { resolve } from 'path'
import * as components from './index.js'

export default defineNuxtModule({
  meta: {
    name: 'vue-components',
    configKey: 'vueComponents',
  },
  setup(options, nuxt) {
    Object.keys(components).forEach((key) => {
      addComponent({
        name: key,
        global: true,
        filePath: resolve(__dirname, `./components/${key}.vue`)
      })
    })
  }
})
