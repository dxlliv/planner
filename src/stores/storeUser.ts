import User from "../core/user/user.class";
import InstagramUser from "../core/platform/instagramUser.class";

export const useUserStore = defineStore("user", () => {
  const userSelectorStore = useUserSelectorStore()

  const users: Ref<{[username: string]: User}> = ref({});
  const userActive: Ref<string> = ref('')

  /**
   * Load user
   *
   * @param rawUser
   * @param origin
   */
  function loadUser(rawUser: IRawUser, origin: string) {
    const username = rawUser.username
    const platform = 'instagram'

    let user

    switch (platform) {
      case 'instagram':
        user = new InstagramUser(toRaw(rawUser), origin)
        break
    }

    // store initialized user
    users.value[username] = user

    // store user to selector list
    userSelectorStore.addUserToSelectorList(username)
  }

  /**
   * Unload user
   *
   * @param username
   */
  function unloadUser(username: string): boolean {
    delete users.value[username]

    return true;
  }

  /**
   * Initialize user from username
   * (called in PageUser.vue)
   *
   * @param username
   */
  function loadUserPage(username: string): boolean {
    const user = users.value[username]

    user.parseUserMedia()
    setUserActive(username)

    return true;
  }

  function getUser(username: string) {
    return users.value[username]
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
