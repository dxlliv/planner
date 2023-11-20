import User from "../core/user/user.class";

export const useUserStore = defineStore("user", () => {
  const users: Ref<{[username: string]: User}> = ref({});
  const userActive: Ref<string> = ref('')

  /**
   * Initialize user
   *
   * @param config
   */
  function loadUserConfig(config: IRawUser): boolean {
    users.value[config.profile.username] = new User(config)

    return true;
  }

  /**
   * Initialize user from username
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

  const profile = computed(() => {
    // posts_count: user.value.profile.media.posts.length todo
    return users.value[userActive.value].profile
  });

  return {
    users,
    profile,
    loadUserConfig,
    loadUserPage,
  };
});
