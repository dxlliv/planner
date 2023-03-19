import { createPinia } from 'pinia'
import {App} from "vue";

export default {
  install: (app: App) => {
    app.use(createPinia())
  }
}
