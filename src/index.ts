import App from "./App.vue"

import "./assets/styles/index.scss";

import { createApp } from "vue"
import { plugins } from "./plugins"

class Planner {
  readonly app

  constructor() {
    this.app = createApp(App).use(plugins).mount("#app")
  }
}

export function createPlanner() {
  return new Planner()
}
