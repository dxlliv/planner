import { plugins } from "./plugins"
import App from "./App.vue"
import { createApp } from "vue"

class Planner {
  readonly app

  constructor() {
    this.app = createApp(App).use(plugins).mount("#app")
  }
}

export function createPlanner() {
  return new Planner()
}
