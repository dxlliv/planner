import { createResolver } from "@nuxt/kit";
import vuetify from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "£": resolve(__dirname, ".")
  },
  modules: [
    "nuxt-swiper",
    "vuetify-nuxt-module",
    '@pinia-plugin-persistedstate/nuxt',
    "@vueuse/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"]
      }
    ],
    "@nuxtjs/i18n"
  ],
  css: [
    "swiper/css",
    "£/styles/index.scss",
  ],
  components: {
    global: true,
    dirs: ["./components"],
  },
  pinia: {
    storesDirs: [
      '../base/stores/**'
    ]
  },
  vuetify: {
    moduleOptions: {
      /* other module options */
      styles: { configFile: resolve("./styles/settings.scss") }
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  },
  /* For Nuxt 3.9.0+ */
  features: {
    inlineStyles: false
  },
  imports: {
    dirs: ['config', 'composables', 'core', 'stores', 'utils']
  },
})
