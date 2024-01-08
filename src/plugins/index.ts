import pinia from "./modules/pinia"
import router from "./modules/router"
import slicksort from "./modules/slicksort"
import vuetify from "./modules/vuetify"

export const pluginsMinimal = {
  install: (app: App) => {
    app.use(slicksort)
    app.use(vuetify)
  },
}

export const plugins = {
  install: (app: App) => {
    app.use(pinia)
    app.use(router)
    app.use(slicksort)
    app.use(vuetify)
  },
}
