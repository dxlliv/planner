import { createVuetify } from "vuetify"

import "vuetify/dist/vuetify.min.css"
import "@mdi/font/css/materialdesignicons.css"

export default {
  install: (app: App) => {
    app.use(createVuetify())
  }
}
