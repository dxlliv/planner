import User from "../core/user/user.class";
import InstagramUser from "../core/platform/instagramUser.class";

export const useUserStore = defineStore("user", () => {
  const userSelectorStore = useUserSelectorStore()

  const users: Ref<{[id: string]: User}> = ref({});
  const userActive: Ref<string> = ref('')

  /**
   * Load provided raw user config
   *
   * @param rawUser
   * @param platform
   * @param origin
   */
  function loadUser(rawUser: IRawUser, platform: string, origin: string): string {
    let user

    switch (platform) {
      case 'instagram':
        user = new InstagramUser(toRaw(rawUser), origin)
        break
      default:
        throw Error('Platform not recognized on user load')
    }

    const id = user.id

    // store initialized user
    users.value[id] = user

    // store user to selector list
    userSelectorStore.addUserToSelectorList(id)

    return id
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

    user.parseUserMedia()
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
    loadUser,
    unloadUser,
    loadUserPage,
    getUser,
  };
});
