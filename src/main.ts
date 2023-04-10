import App from './App.vue'

// plugins
import pinia from "./plugins/pinia"
import router from "./plugins/router";
import vuetify from "./plugins/vuetify";

createApp(App)
.use(vuetify)
.use(router)
.use(pinia)
.mount('#app')
