export const useProfileStore = defineStore("profile", () => {
    const userStore = useUserStore()

    const profile = computed(() => {
        // posts_count: user.value.profile.media.posts.length todo
        if (
            !userStore.userActive ||
            !Object.prototype.hasOwnProperty.call(userStore.users, userStore.userActive)
        ) {
            return null
        }

        return userStore.users[userStore.userActive].profile
    });

    return {
        profile,
    };
});
