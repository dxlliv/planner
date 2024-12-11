import { createResolver } from "@nuxt/kit";
import plannerConfig from "./planner.config"

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  alias: {
    "~": resolve(__dirname, "."),
    "@": resolve(__dirname, "./src")
  },

  srcDir: "./src",
  extends: [
    "./core"
  ],

  css: [
    './styles/index.scss',
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/navigation',
    'filepond/dist/filepond.min.css',
  ],

  app: {
    baseURL: '/planner/',
    head: {
      title: "Planner",
    }
  },

  ssr: false,

  experimental: {
    typedPages: false,
    sharedPrerenderData: false,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    },
  },

  i18n: {
    defaultLocale: plannerConfig.locale,
  },

  devtools: { enabled: false },
  compatibilityDate: "2024-09-29",
});