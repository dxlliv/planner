import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  alias: {
    "~": resolve(__dirname, "."),
    "@": resolve(__dirname, "./src")
  },
  srcDir: "./src",
  extends: ["./core"],
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
  devtools: { enabled: false },
});
