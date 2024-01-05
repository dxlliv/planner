import { createVuetify } from "vuetify";
import { VuetifyDateAdapter } from 'vuetify/lib/composables/date/adapters/vuetify'

export default {
  install: (app: App) => {
    app.use(
      createVuetify({
        icons: {
          defaultSet: "mdi",
        },
        date: {
          adapter: VuetifyDateAdapter,
        },
      }),
    );
  },
};
