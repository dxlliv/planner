import plannerConfig from "../../config.json";

export const useConfigStore = defineStore("config", () => {
  const configUserStore = useConfigUserStore()

  const config: Ref<IRawConfig> = ref({
    users: []
  })

  /**
   * Load ig-planner local configuration
   * from /ig-planner/config.json
   */
  async function loadLocalConfig(): Promise<boolean> {
    // for each user defined in the root config.json
    for await (const userConfigPath of plannerConfig.users) {
      // fetch user config from its local/remote path
      const remoteUserConfig = await fetchRemoteUserConfig(`${userConfigPath}/config.json`)

      // set user config in configUserStore
      configUserStore.setUserConfig(remoteUserConfig)

      // store loaded users
      config.value.users.push(userConfigPath)
    }

    // initialize users
    configUserStore.loadUsers()

    return true;
  }

  async function loadStorageConfig() {

  }

  return {
    loadLocalConfig,
    loadStorageConfig,
  };
}, {
  persist: true
});
