import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

export default {
  install: (app: App) => {
    app.use(
      createVuetify({
        icons: {
          defaultSet: "mdi",
          aliases,
          sets: {
            mdi,
          },
        },
      }),
    );
  },
};
