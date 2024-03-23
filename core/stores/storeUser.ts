import User from "../lib/user/user.class"
import InstagramUser from "../lib/platform/instagram/instagramUser.class"
import { IRawUserProfile } from "../types"

// id is :platform/:rawUser

export const useUserStore = defineStore("user", () => {
  const users: Ref<{
    [id: string]: {
      [platform: string]: User
    }
  }> = ref({})

  /**
   * Create user
   *
   * @param rawUser
   * @param platform
   */
  async function createUser(rawUser: IRawUser): Promise<boolean> {
    const user = await loadUser(rawUser, "storage")

    useUserStorageStore().addUserToStorageIndex({
      platform: user.platform,
      username: user.raw.profile.username,
    })

    return true
  }

  /**
   * Update user
   *
   * @param user
   * @param platform
   */
  async function updateUser(user: User, profile: IRawUserProfile): boolean {
    await user.profile.update(removeUndefinedFromObject(profile))
    await user.save()

    return true
  }

  /**
   * Load provided raw user config
   *
   * @param rawUser
   * @param origin
   */
  async function loadUser(
    rawUser: IRawUser,
    origin: string,
  ): Promise<User> {
    let user

    switch (rawUser.platform) {
      case "instagram":
        user = new InstagramUser(rawUser, origin)
        break
      default:
        throw Error("Platform not recognized on user load")
    }

    // initialize user
    await user.init()

    if (!users.value[user.id]) {
      users.value[user.id] = {}
    }

    // store initialized user
    users.value[user.id][rawUser.platform] = user

    console.log("[Planner] User loaded:", user.id)

    return user
  }

  /**
   * Unload user
   *
   * @param userId
   */
  function unloadUser(userId: string): boolean {
    delete users.value[userId]

    return true
  }

  /**
   * Get user by id
   *
   * @param id
   * @param platform
   */
  function getUser(id: string, platform: string) {
    return users.value[id][platform]
  }

  /**
   * Get active user
   */
  const userList = computed(() => {
    const list = []

    for (const userPlatforms of Object.values(users.value)) {
      for (const user of Object.values(userPlatforms)) {
        list.push(user)
      }
    }

    return list
  })

  return {
    //users,
    userList,
    createUser,
    updateUser,
    loadUser,
    unloadUser,
    getUser,
  }
})
