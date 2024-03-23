import { defineNuxtConfig } from 'nuxt/config'
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
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins.push(
        vuetify({
          styles: { configFile: resolve("./styles/settings.scss") }
        })
      );
    }
  },
  pinia: {
    storesDirs: [
      '../base/stores/**'
    ]
  },
  imports: {
    dirs: ['config', 'composables', 'core', 'stores', 'utils']
  },
})
