import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default {
  install: (app: App) => {
    app.use(
      createVuetify({
        components,
        directives,
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
