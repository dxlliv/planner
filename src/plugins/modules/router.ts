import { createRouter, createWebHistory } from "vue-router";

export default {
  install: (app: App) => {
    app.use(
      createRouter({
        history: createWebHistory(),
        routes: [
          {
            name: "index",
            path: "/ig-planner/",
            component: () => import("~/pages/PageIndex.vue"),
          },
          {
            name: "user",
            path: "/ig-planner/:platform/:username",
            component: () => import("~/pages/PageUser.vue"),
          },
        ],
      }),
    );
  },
};
