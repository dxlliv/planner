import localforage from "localforage";
import {plugins} from "./plugins";
import App from "./App.vue";

// set localforage config
localforage.config({
    driver      : localforage.INDEXEDDB,
    name        : 'planner',
})

// initialize app
createApp(App)
    .use(plugins)
    .mount("#app");
