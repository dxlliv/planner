import { createRouter, createWebHashHistory } from "vue-router"

export default {
  install: (app: App) => {
    app.use(
      createRouter({
        history: createWebHashHistory(),
        routes: [
          {
            name: "index",
            path: "/",
            component: () => import("~/pages/PageIndex.vue"),
          },
          {
            name: "user",
            path: "/:platform?/:username",
            component: () => import("~/pages/PageUser.vue"),
          },
        ],
      }),
    )
  },
}
