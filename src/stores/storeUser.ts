import User from "../core/user/user.class";
import InstagramUser from "../core/platform/instagramUser.class";

export const useUserStore = defineStore("user", () => {
  const userSelectorStore = useUserSelectorStore()

  const platformUsers: Ref<{[username: string]: User}> = ref({});
  const userActive: Ref<string> = ref('')

  /**
   * Load user
   *
   * @param rawUser
   * @param platform
   * @param origin
   */
  function loadUser(rawUser: IRawUser, platform: string, origin: string) {
    const username = rawUser.username
    const userPath = `${platform}/${username}`

    let user

    switch (platform) {
      case 'instagram':
        user = new InstagramUser(toRaw(rawUser), origin)
        break
    }

    // store initialized user
    platformUsers.value[userPath] = user

    // store user to selector list
    userSelectorStore.addUserToSelectorList(userPath)
  }

  /**
   * Unload user
   *
   * @param username
   */
  function unloadUser(username: string): boolean {
    delete platformUsers.value[username]

    return true;
  }

  /**
   * Initialize user from username
   * (called in PageUser.vue)
   *
   * @param username
   */
  function loadUserPage(username: string): boolean {
    const user = platformUsers.value[username]

    user.parseUserMedia()
    setUserActive(username)

    return true;
  }

  function getUser(username: string) {
    return platformUsers.value[username]
  }

  /**
   * Set active user
   *
   * @param username
   */
  function setUserActive(username: string) {
    userActive.value = username
  }

  const user = computed(() => {
    return platformUsers.value[userActive.value]
  })

  return {
    platformUsers,
    user,
    userActive,
    loadUser,
    unloadUser,
    loadUserPage,
    getUser,
  };
});
