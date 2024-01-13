import UserConfig from "../core/user/userConfig.class";

export const useUserConfigStore = defineStore("user/config", () => {
  const userStore = useUserStore()

  /**
   * Load users from local config
   */
  async function loadUsersFromConfig(): Promise<boolean> {
    const rawUsers = await UserConfig.getUsersConfig()

    // for each user defined in the root config.json
    for await (const rawUser of rawUsers) {
      userStore.loadUser(rawUser, "config")
    }

    return true
  }

  return {
    loadUsersFromConfig,
  }
})
