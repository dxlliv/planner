import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  ssr: false,
  alias: {
    "~": resolve(__dirname, "."),
    "@": resolve(__dirname, "./src")
  },
  extends: ["plxnner"],
  app: {
    head: {
      title: "Planner",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  },
  build: {
    transpile: ["vuetify"]
  }
});
