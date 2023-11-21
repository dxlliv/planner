export const useConfigUserStore = defineStore("config/user", () => {
  const userStore = useUserStore()

  const config: Ref<{[username: string]: IRawUser}> = ref({});

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

  function loadUsers() {
    Object.values(config.value).map(rawUser => {
      userStore.initializeUserConfig(rawUser)
    })
  }

  const count = computed(() => {
    return Object.values(config.value).length
  })

  return {
    config,
    count,
    getUserConfig,
    setUserConfig,
    unsetUserConfig,
    loadUsers,
  };
}, {
  persist: true
});
