import User from "../core/user/user.class";

export const useUserStore = defineStore("user", () => {
  const users: Ref<{[username: string]: User}> = ref({});
  const userActive: Ref<string> = ref('')

  /**
   * Initialize user
   *
   * @param rawUser
   */
  function initializeUserConfig(rawUser: IRawUser): boolean {
    users.value[rawUser.profile.username] = new User(rawUser)

    return true;
  }

  /**
   * Initialize user from username
   * (called in PageProfile.vue)
   *
   * @param username
   */
  function initializeUserPage(username: string): boolean {
    const config = useConfigUserStore().getUserConfig(username)

    initializeUserConfig(config)
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
    initializeUserConfig,
    initializeUserPage,
  };
});
