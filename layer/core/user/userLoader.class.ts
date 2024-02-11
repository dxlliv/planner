import localforage from "localforage"
import UserConfig from "./userConfig.class";

export default class UserLoader {
  /**
   * Load users from local config
   */
  static async loadUsersFromConfig() {
    const userStore = useUserStore()
    const rawUsers = await UserConfig.getUsersConfig()

    // for each user defined in the root config.json
    for await (const rawUser of rawUsers) {
      await userStore.loadUser(rawUser, "config")
    }

    return true
  }

  /**
   * Load users from local forage
   * (usernames are stored in local storage)
   */
  static async loadUsersFromStorage() {
    const userStorageStore = useUserStorageStore()

    for await (const id of userStorageStore.users) {
      const rawUsername = extractUsernameFromUserId(id)
      await UserLoader.restoreUserFromStorage(rawUsername)
    }
  }

  /**
   * Restore user from local forage
   *
   * @param username
   */
  static async restoreUserFromStorage(rawUsername: string) {
    const userStore = useUserStore()
    const userStorageStore = useUserStorageStore()

    const userStorage = localforage.createInstance({
      name: "planner",
      storeName: rawUsername,
    })

    const rawUsernames = await userStorage.keys()

    for await (const platform of rawUsernames) {
      // @ts-ignore
      const rawUser: IRawUser = await userStorage.getItem(platform)

      // define platform in raw user config
      rawUser.platform = platform

      if (rawUser) {
        await userStore.loadUser(rawUser, "storage")
      } else {
        // something happened,
        // it no longer exists
        userStorageStore.removeUserFromStorageIndex(rawUsername)
      }
    }
  }
}