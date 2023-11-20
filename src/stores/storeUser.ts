import User from "../core/user/user.class";

export const useUserStore = defineStore("user", () => {
  const users: Ref<IUsers> = ref({});
  const user: Ref<IUser> = ref({} as IUser);

  /**
   * Import user configuration
   *
   * @param userConfig
   */
  function loadUserConfig(userConfig: IRawUser) {
    const user: User = new User(userConfig)

    // parse profile
    users.value[user.profile.username] = user;
  }

  /**
   * Set active user
   *
   * @param username
   */
  function setActiveUser(username: string): boolean {
    if (!Object.prototype.hasOwnProperty.call(users.value, username)) {
      throw new Error("User not found");
    }

    user.value = users.value[username];

    return true;
  }

  const profile = computed(() => {
    return {
      ...user.value.profile,
      posts_count: user.value.profile.media.posts.length,
    };
  });

  return {
    users,
    profile,
    loadUserConfig,
    setActiveUser,
  };
});
