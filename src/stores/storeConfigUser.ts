export const useConfigUserStore = defineStore("config/user", () => {
  const userStore = useUserStore()

  const config: Ref<{[username: string]: IRawUser}> = ref({});

  /**
   * Initialize user configuration
   */
  function loadUsers() {
    Object.values(config.value).map(rawUser => {
      userStore.initializeUserConfig(rawUser)
    })
  }

  /**
   * Get user configuration
   *
   * @param username
   */
  function getUserConfig(username: string) {
    return config.value[username]
  }

  /**
   * Set user configuration
   *
   * @param rawUser
   */
  function setUserConfig(rawUser: IRawUser) {
    // set user order for right position
    rawUser.order = count.value

    // set user configuration
    config.value[rawUser.profile.username] = rawUser;
  }

  /**
   * Remove user configuration
   *
   * @param username
   */
  function unsetUserConfig(username: string) {
    delete config.value[username];
  }

  /**
   * Return users count
   */
  const count: ComputedRef<number> = computed(() => {
    return Object.keys(config.value).length
  })

  return {
    count,
    setUserConfig,
    unsetUserConfig,
    getUserConfig,
    loadUsers,
  };
}, {
  persist: true
});
