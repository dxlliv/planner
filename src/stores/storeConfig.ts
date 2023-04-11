import profilesDefault from "../config/profiles.json"
import profilesLocal from "../../config/profiles.json"

export const useConfigStore = defineStore("config", () => {
  const config: Ref<IConfig> = ref({} as IConfig)

  function setConfig(data: any): void {
    config.value = data
  }

  function loadConfig(): IConfig {
    const profiles = loadConfigProfiles()

    config.value = {
      profiles
    }

    return config.value
  }

  function loadConfigProfiles(): IConfigProfiles {
    let profiles: IConfigProfiles = {}

    if (Array.isArray(profilesLocal) && profilesLocal.length > 0) {
      // load local profiles configuration provided as array
      profilesLocal.map((profile) => {
        profiles[profile.fields.username] = parseProfile(profile)
      })
    } else if (Object.keys(profilesLocal).length > 0) {
      // load local profiles configuration provided as object
      Object.values(profilesLocal).map((profile) => {
        profiles[profile.fields.username] = parseProfile(profile)
      })
    } else {
      // load default profiles configuration provided as object
      Object.values(profilesDefault).map((profile) => {
        profiles[profile.fields.username] = parseProfile(profile)
      })
    }

    return profiles
  }

  const profiles: ComputedRef<IConfigProfiles> = computed(() => config.value.profiles)

  return {
    config,
    setConfig,
    loadConfig,
    profiles
  }
})
