export const useUserStore = defineStore("user", () => {
  const configStore = useConfigStore();

  const user: Ref<IUser> = ref({} as IUser);

  async function loadUser(username: string): Promise<boolean> {
    if (Object.prototype.hasOwnProperty.call(configStore.users, username)) {
      user.value = configStore.users[username];

      return true;
    }

    throw new Error("User not found");
  }

  const profile = computed(() => {
    return {
      ...user.value.profile,
      posts_count: user.value.profile.media.posts.length,
    };
  });

  return {
    loadUser,
    profile,
  };
});
