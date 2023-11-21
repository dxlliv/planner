import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";

// styles
import '../src/assets/styles/variables.scss'
import '../src/assets/styles/index.scss'

// plugins
import vuetify from "../src/plugins/vuetify"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

setup((app) => {
  app.use(vuetify)
})

export default preview;
