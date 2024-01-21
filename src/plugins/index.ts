import pinia from "./modules/pinia"
import router from "./modules/router"
import slicksort from "./modules/slicksort"
import vuetify from "./modules/vuetify"
import i18n from "./modules/i18n";

export const pluginsMinimal = {
  install: (app: App) => {
    app.use(slicksort)
    app.use(vuetify)
    app.use(i18n)
  },
}

export const plugins = {
  install: (app: App) => {
    app.use(pinia)
    app.use(router)
    app.use(i18n)
    app.use(slicksort)
    app.use(vuetify)
  },
}
