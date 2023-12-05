import plannerConfig from "../../config.json";
import {getPlatformFromUserPath} from "../utils/utilsPlatform";

export const useConfigStore = defineStore("config", () => {
  const userStore = useUserStore()

  /**
   * Load planner local configuration
   * from /planner/config.json
   */
  async function loadConfig() {
    await loadUsersFromLocalConfig()
  }

  /**
   * Load users from local config
   */
  async function loadUsersFromLocalConfig(): Promise<boolean> {
    // for each user defined in the root config.json
    for await (const userPath of plannerConfig.users) {

      // fetch user config from its local/remote path
      const rawUserConfig = await fetchRemoteUserConfig(`user/${userPath}/config.json`)
      const platform: string = getPlatformFromUserPath(userPath)

      // load users
      userStore.loadUser(rawUserConfig, platform, 'config')

    }

    return true;
  }

  return {
    loadConfig,
  };
})
