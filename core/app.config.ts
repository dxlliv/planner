import messages from './locales'
import { usePlannerConfig } from "./composables/composableConfig"

const plannerConfig = usePlannerConfig()

export default defineAppConfig({
  i18n: {
    locale: plannerConfig.locale,
    fallbackLocale: plannerConfig.locale,
    availableLocales: [
      "en",
      "it"
    ],
    messages,
    warnHtmlMessage: false
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    i18n: any
  }
}
