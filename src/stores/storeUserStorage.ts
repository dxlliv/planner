import localforage from 'localforage';

export const useUserStorageStore = defineStore("user/storage", () => {
  const userStore = useUserStore()

  const users: Ref<userPath[]> = ref([])

  async function initialize() {
    localforage.config({
      driver: localforage.INDEXEDDB,
      name: 'planner',
    })
  }

  /**
   * Load users from local forage
   * (usernames are stored in local storage)
   */
  async function loadUsersFromStorage() {
    for await (const username of users.value) {
      await restoreUserFromStorage(username)
    }
  }

  /**
   * Add username to local storage
   * to easily detect which users
   * are stored in local forage
   *
   * @param username
   */
  function addUserToStorageIndex(username: string) {
    if (!users.value.includes(username)) {
      users.value.push(username)
    }
  }

  /**
   * Remove username from local storage
   * if user is removed from local forage
   *
   * @param username
   */
  function removeUserFromStorageIndex(username: string) {
    if (users.value.includes(username)) {
      users.value = users.value.filter(u => u !== username)
    }
  }

  /**
   * Restore user from local forage
   *
   * @param username
   */
  async function restoreUserFromStorage(username: string) {
    const userStorage = localforage.createInstance({
      name: 'planner',
      storeName: username
    })


    const platforms = await userStorage.keys()

    for await (const platform of platforms) {
      // @ts-ignore
      const rawUser: IRawUser = await userStorage.getItem(platform)

      if (rawUser) {
        userStore.loadUser(rawUser, 'storage')
      } else {
        // something happened,
        // it no longer exists
        removeUserFromStorageIndex(username)
      }
    }
  }

  return {
    users,
    initialize,
    addUserToStorageIndex,
    removeUserFromStorageIndex,
    loadUsersFromStorage,
  };
}, {
  persist: true
});
