import messages from '~/layer/locales'

export default defineI18nConfig(() => {
    const plannerConfig = usePlannerConfig()

    return {
        locale: plannerConfig.locale,
        fallbackLocale: plannerConfig.locale,
        availableLocales: [
          "en",
          "it"
        ],
        messages,
        warnHtmlInMessage: false,
    }
})