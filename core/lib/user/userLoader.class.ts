import { openDB } from "idb"
import UserConfig from "./userConfig.class"

export default class UserLoader {
  /**
   * Load users from local config
   */
  static async loadUsersFromConfig() {
    const userStore = useUserStore()
    const rawUsers = await UserConfig.getUsersConfig()

    // for each user defined in the root config.json
    for await (const rawUser of rawUsers) {
      await userStore.loadUser(rawUser)
    }

    return true
  }

  /**
   * Load users from local forage
   * (usernames are stored in local storage)
   */
  static async loadUsersFromStorage() {
    const userStorageStore = useUserStorageStore()

    for await (const tempUserReference of userStorageStore.users) {
      await UserLoader.restoreUserFromStorage(tempUserReference)
    }
  }

  /**
   * Restore user from local forage
   *
   * @param tempUserReference
   */
  static async restoreUserFromStorage(tempUserReference: ITempUserReference) {
    const userStore = useUserStore()
    const userStorageStore = useUserStorageStore()

    const userStorage = await openDB("planner", 1)

    const rawUser = await userStorage.get(
      tempUserReference.platform,
      tempUserReference.username
    )

    rawUser.platform = tempUserReference.platform
    rawUser.origin = 'storage'

    if (rawUser) {
      await userStore.loadUser(rawUser)
    } else {
      // something happened,
      // it no longer exists
      userStorageStore.removeUserFromStorageIndex(tempUserReference)
    }
  }
}