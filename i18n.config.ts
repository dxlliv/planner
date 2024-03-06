export default defineI18nConfig(() => {
    const appConfig = useAppConfig()

    return appConfig.i18n
})