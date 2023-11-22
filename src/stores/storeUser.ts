import User from "../core/user/user.class";

export const useUserStore = defineStore("user", () => {
  const users: Ref<{[username: string]: User}> = ref({});
  const userActive: Ref<string> = ref('')

  /**
   * Load user
   *
   * @param rawUser
   */
  function loadUserConfig(rawUser: IRawUser): boolean {
    users.value[rawUser.profile.username] = new User(toRaw(rawUser))

    return true;
  }

  /**
   * Unload user
   *
   * @param username
   */
  function unloadUserConfig(username: string): boolean {
    delete users.value[username]

    return true;
  }

  /**
   * Initialize user from username
   * (called in PageProfile.vue)
   *
   * @param username
   */
  function loadUserPage(username: string): boolean {
    const config = useConfigUserStore().getUserConfig(username)

    loadUserConfig(config)
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

  return {
    users,
    userList,
    userActive,
    loadUserConfig,
    unloadUserConfig,
    loadUserPage,
  };
});
