import App from "./App.vue"
import "./assets/styles/index.scss";

import { plugins } from "./plugins"

// initialize app
createApp(App).use(plugins).mount("#app")
