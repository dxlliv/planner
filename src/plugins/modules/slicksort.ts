import { plugin as Slicksort } from "vue-slicksort"

export default {
  install: (app: App) => {
    app.use(Slicksort)
  },
}
