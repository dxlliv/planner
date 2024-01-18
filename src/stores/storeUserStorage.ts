import localforage from "localforage"

export const useUserStorageStore = defineStore(
  "user/storage",
  () => {
    const userStore = useUserStore()

    const users: Ref<string[]> = ref([])

    async function init() {
      localforage.config({
        driver: localforage.INDEXEDDB,
        name: "planner",
      })
    }

    /**
     * Load users from local forage
     * (usernames are stored in local storage)
     */
    async function loadUsersFromStorage() {
      for await (const id of users.value) {
        const rawUsername = extractUsernameFromUserId(id)
        await restoreUserFromStorage(rawUsername)
      }
    }

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

    /**
     * Restore user from local forage
     *
     * @param username
     */
    async function restoreUserFromStorage(rawUsername: string) {
      const userStorage = localforage.createInstance({
        name: "planner",
        storeName: rawUsername,
      })

      const rawUsernames = await userStorage.keys()

      for await (const platform of rawUsernames) {
        // @ts-ignore
        const rawUser: IRawUser = await userStorage.getItem(platform)

        if (rawUser) {
          await userStore.loadUser(rawUser, "storage")
        } else {
          // something happened,
          // it no longer exists
          removeUserFromStorageIndex(rawUsername)
        }
      }
    }

    return {
      users,
      init,
      addUserToStorageIndex,
      removeUserFromStorageIndex,
      loadUsersFromStorage,
    }
  },
  {
    persist: true,
  },
)
