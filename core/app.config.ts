import messages from './locales'
import { usePlannerConfig } from "./composables/composableConfig"

const plannerConfig = usePlannerConfig()

export default defineAppConfig({
  i18n: {
    locale: plannerConfig.locale,
    fallbackLocale: plannerConfig.locale,
    availableLocales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'fr',
        name: 'Français'
      },
      {
        code: 'it',
        name: 'Italiano'
      },
    ],
    messages,
    warnHtmlMessage: false,
  }
})