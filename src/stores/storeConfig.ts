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

    // users defined in /ig-planner/config.json have already been set
    // and are stored in local storage with the pinia persistent lib
    if (configUserStore.count > 0) {
        // initialize users
        configUserStore.loadUsers()
        return true
    }

    // fresh start: load users defined in /ig-planner/config.json
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
