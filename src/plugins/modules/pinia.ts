import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

export default {
  install: (app: App) => {
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)

    app.use(pinia)
  },
}
