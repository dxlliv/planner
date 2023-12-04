import plannerConfig from "../../config.json";

export const useConfigStore = defineStore("config", () => {
  const userStore = useUserStore()

  /**
   * Load ig-planner local configuration
   * from /ig-planner/config.json
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
      const remoteUserConfig = await fetchRemoteUserConfig(`user/${userPath}/config.json`)

      // load users
      userStore.loadUser(remoteUserConfig, 'config')
    }

    return true;
  }

  return {
    loadConfig,
  };
})
