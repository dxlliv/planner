import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
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
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  },
  vite: {
    define: {
      "process.env.DEBUG": false
    }
  }
});
