import messages from '../../locales'
import { createI18n } from "vue-i18n";

const plannerConfig = usePlannerConfig()

export default {
  install: (app: App) => {
    const i18n = createI18n({
      locale: plannerConfig.locale ?? 'en',
      fallbackLocale: 'en',
      messages,
      formatFallbackMessages: true,
      warnHtmlMessage: false,
    })

    app.use(i18n)
  },
}
