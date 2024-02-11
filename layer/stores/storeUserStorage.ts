export const useUserStorageStore = defineStore(
  "user/storage",
  () => {
    const users: Ref<string[]> = ref([])

    /**
     * Add username to local storage
     * to easily detect which users
     * are stored in local forage
     *
     * @param rawUsername
     */
    function addUserToStorageIndex(rawUsername: string) {
      if (!users.value.includes(rawUsername)) {
        users.value.push(rawUsername)
      }
    }

    /**
     * Remove username from local storage
     * if user is removed from local forage
     *
     * @param username
     */
    function removeUserFromStorageIndex(rawUsername: string) {
      if (users.value.includes(rawUsername)) {
        users.value = users.value.filter((u) => u !== rawUsername)
      }
    }

    return {
      users,
      addUserToStorageIndex,
      removeUserFromStorageIndex,
    }
  },
  {
    persist: true,
  },
)
