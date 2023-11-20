import plannerConfig from "../../config.json";

export const useConfigStore = defineStore("config", () => {
  const configUserStore = useConfigUserStore()

  const config: Ref<IConfig> = ref({
    users: []
  })

  /**
   * Load ig-planner local configuration
   * from /ig-planner/config.json
   */
  async function loadConfig(): Promise<boolean> {
    config.value.users = plannerConfig.users

      // load user config only with no loaded users
      if (configUserStore.count > 0) {
          return true
      }

    // load remote user configuration
    // from /ig-planner/public or any remote url
    config.value.users.map(async userConfigPath => {
        const remoteUserConfig = await loadRemoteUserConfig(`${userConfigPath}/config.json`)
        configUserStore.setUserConfig(remoteUserConfig)
    })

    configUserStore.loadUsers()

    return true;
  }

  return {
    loadConfig,
  };
});
