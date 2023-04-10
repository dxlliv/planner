import profilesDefault from "../config/profiles.json"
import profilesLocal from "../../config/profiles.json"

export const useConfigStore = defineStore('config', () => {
    const profileStore = useProfileStore()
    const config: Ref<IConfig> = ref({} as IConfig)

    function setConfig(data: any) {
        config.value = data
    }

    function loadConfig() {
        const profiles = loadConfigProfiles()
                
        config.value = { profiles }
    }

    function loadConfigProfiles () {
        let profiles = {}

        if (Array.isArray(profilesLocal) && profilesLocal.length > 0) {
            // load local profiles configuration provided as array
            profilesLocal.map(profile => {
                profiles[profile.fields.username] = profileStore.parseProfile(profile)
            })
        } else if (Object.keys(profilesLocal).length > 0) {
            // load local profiles configuration provided as object
            Object.values(profilesLocal).map(profile => {
                profiles[profile.fields.username] = profileStore.parseProfile(profile)
            })
        } else {
            // load default profiles configuration provided as object
            Object.values(profilesDefault).map(profile => {
                profiles[profile.fields.username] = profileStore.parseProfile(profile)
            })
        }

        return profiles
    }

    const profiles = computed(() => config.value.profiles)

    return {
        config,
        setConfig,
        loadConfig,
        profiles
    }
})


