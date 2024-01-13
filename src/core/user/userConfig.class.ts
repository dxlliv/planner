import { usePlannerConfig } from "../../composables/composableConfig";

export default class UserConfig {
  private static readonly config = usePlannerConfig()

  /**
   * Get raw users config
   */
  public static async getUsersConfig() {
    const plannerConfig = usePlannerConfig()
    const rawUsers = []

    for await (const userPath of plannerConfig.users) {
      rawUsers.push(this.getUserConfig(userPath))
    }

    return rawUsers
  }

  /**
   * Determine user config path and retrieve it
   *
   * @param userPath
   */
  public static async getUserConfig(userPath: string) {
    let userConfigFullPath = ""

    if (userPath.startsWith("http")) {
      // is remote config
      userConfigFullPath = userPath
    } else {
      // is local config
      userConfigFullPath = `user/${userPath}/config.json`
    }

    // fetch user config from its local/remote path
    const rawUser = await this.fetchUserConfig(userConfigFullPath)

    const platform: string = rawUser.platform
      ?? this.config.platform.default
      ?? "instagram"

    // set platform to rawUser
    if (rawUser.platform !== platform) {
      rawUser.platform = platform
    }

    return rawUser
  }

  /**
   * Fetch raw user config
   *
   * @param url
   * @private
   */
  private static async fetchUserConfig(url: string): Promise<IRawUser> {
    return fetch(url)
      .then(async (response) => {
        const rawUser: IRawUser = await response.json()

        // sets where this config comes from
        rawUser.path = url.replace("/config.json", "")

        return rawUser
      })
      .catch((e) => {
        throw Error(e)
      })
  }
}