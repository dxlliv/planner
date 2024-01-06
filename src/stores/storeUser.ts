import User from "../core/user/user.class";
import InstagramUser from "../core/platform/instagramUser.class";
import { IRawUserProfile } from "../types";

// id is :platform/:rawUser

export const useUserStore = defineStore("user", () => {
  const users: Ref<{[id: string]: User}> = ref({});
  const userActive: Ref<string> = ref('')

  /**
   * Create user
   *
   * @param rawUser
   * @param platform
   */
  async function createUser(rawUser: IRawUser, platform: string): boolean {
    const user = await loadUser(rawUser, platform, 'storage')

    useUserStorageStore().addUserToStorageIndex(user.raw.profile.username)

    return true;
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

    return true;
  }

  /**
   * Load provided raw user config
   *
   * @param rawUser
   * @param platform
   * @param origin
   */
  async function loadUser(rawUser: IRawUser, platform: string, origin: string): User {
    let user

    switch (platform) {
      case 'instagram':
        user = new InstagramUser(rawUser, origin)
        break
      default:
        throw Error('Platform not recognized on user load')
    }

    // initialize user
    await user.init()

    // store initialized user
    users.value[user.id] = user

    console.log('[Planner] User loaded:', user.id)

    return user
  }

  /**
   * Unload user
   *
   * @param id
   */
  function unloadUser(id: string): boolean {
    delete users.value[id]

    return true;
  }

  /**
   * Fully initialize user from PageUser.vue
   *
   * @param id
   */
  function loadUserPage(id: string): boolean {
    const user = users.value[id]

    user.media.fetch()
    setUserActive(id)

    return true;
  }

  /**
   * Get user by id
   *
   * @param id
   */
  function getUser(id: string) {
    return users.value[id]
  }

  /**
   * Set active user id
   *
   * @param id
   */
  function setUserActive(id: string) {
    userActive.value = id
  }

  /**
   * Get active user
   */
  const user = computed(() => {
    return users.value[userActive.value]
  })

  return {
    users,
    user,
    userActive,
    createUser,
    updateUser,
    loadUser,
    unloadUser,
    loadUserPage,
    getUser,
  };
});
