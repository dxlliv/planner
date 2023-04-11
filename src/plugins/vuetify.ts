import { createVuetify } from "vuetify/dist/vuetify.js"

import "vuetify/dist/vuetify.min.css"
import "@mdi/font/css/materialdesignicons.css"

export default {
  install: (app: App) => {
    app.use(createVuetify())
  }
}
