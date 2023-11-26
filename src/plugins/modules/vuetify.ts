import { createVuetify } from "vuetify";

export default {
  install: (app: App) => {
    app.use(
      createVuetify({
        icons: {
          defaultSet: "mdi",
        },
      }),
    );
  },
};
