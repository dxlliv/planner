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
    }
  }
});
