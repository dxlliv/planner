import plannerConfig from "../../config.json";

export const useUserConfigStore = defineStore("user/config", () => {
  const userStore = useUserStore()

  /**
   * Load users from local config
   */
  async function loadUsersFromConfig(): Promise<boolean> {
    // for each user defined in the root config.json
    for await (const userPath of plannerConfig.users) {

      let userConfigFullPath = ''

      // is local or remote config?
      if (userPath.startsWith('http')) {
        userConfigFullPath = userPath
      } else{
        userConfigFullPath = `user/${userPath}/config.json`
      }

      // fetch user config from its local/remote path
      const rawUser = await fetchRemoteUserConfig(userConfigFullPath)
      const platform: string = rawUser.platform ?? plannerConfig.platform.default ?? "instagram"

      // load users
      userStore.loadUser(rawUser, platform, 'config')

    }

    return true;
  }

  return {
    loadUsersFromConfig,
  };
})
