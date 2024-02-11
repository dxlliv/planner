import messages from '~/layer/locales'

export default defineI18nConfig(() => {
    return {
        locale: "en",
        fallbackLocale: "en",
        availableLocales: [
          "en",
          "it"
        ],
        messages,
        warnHtmlInMessage: false,
    }
})