import plannerConfig from "../../config.json";
import {useUserStore} from "./storeUser";

export const useConfigStore = defineStore("config", () => {
  const userStore = useUserStore()

  const config: Ref<IConfig> = ref({
    users: []
  })

  /**
   * Load ig-planner local configuration
   * from /ig-planner/config.json
   */
  async function loadConfig(): Promise<boolean> {
    config.value.users = plannerConfig.users

    // load remote user configuration
    // from /ig-planner/public or any remote url
    config.value.users.map(async userConfigPath => {
      await loadRemoteUserConfig(`${userConfigPath}/config.json`)
    })

    return true;
  }

  /**
   * Fetch user configuration from the provided url
   *
   * @param url
   */
  async function loadRemoteUserConfig(url: string) {
    await fetch(url)
        .then(async response => {
          const userConfig = await response.json()

          userStore.loadUserConfig(userConfig)
          return true
        })
        .catch(e => {
          throw Error(e)
        })
  }

  return {
    loadConfig,
  };
});
