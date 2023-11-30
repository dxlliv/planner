import User from "../core/user/user.class";

export const useUserStore = defineStore("user", () => {
  const users: Ref<{[username: string]: User}> = ref({});
  const userActive: Ref<string> = ref('')

  /**
   * Load user
   *
   * @param rawUser
   * @param storeImmediately
   */
  function loadUser(rawUser: IRawUser, storeImmediately: boolean = false): IUser {
    const user = new User(toRaw(rawUser), storeImmediately)

    users.value[rawUser.profile.username] = user

    return user;
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

  /**
   * Set active user
   *
   * @param username
   */
  function setUserActive(username: string) {
    userActive.value = username
  }

  /**
   * Return users sorted by order
   */
  const userList: ComputedRef<User[]> = computed(() => {
    return Object.values(users.value).sort((a: any, b: any) => a.order - b.order)
  })

  const user = computed(() => {
    return users.value[userActive.value]
  })

  return {
    users,
    userList,
    userActive,
    user,
    loadUser,
    unloadUser,
    loadUserPage,
    importUserFromDirectory,
  };
});
