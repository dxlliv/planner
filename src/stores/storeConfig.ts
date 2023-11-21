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
  async function loadConfig(): Promise<boolean> {
    config.value.users = plannerConfig.users

    // for each user config path
    for await (const userConfigPath of config.value.users) {
      // fetch user config from its local/remote path
      const remoteUserConfig = await loadRemoteUserConfig(`${userConfigPath}/config.json`)
      configUserStore.setUserConfig(remoteUserConfig)
    }

    // initialize users
    configUserStore.loadUsers()

    return true;
  }

  return {
    loadConfig,
  };
});
