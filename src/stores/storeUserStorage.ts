import localforage from 'localforage';

export const useUserStorageStore = defineStore("user/storage", () => {
  const userStore = useUserStore()

  const storage: Ref<IRawConfig> = ref([])

  /**
   * Load users from local forage
   * (usernames are stored in local storage)
   */
  async function loadUsersFromStorage() {
    for await (const username of storage.value) {
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
  function addUserToStorage(username: string) {
    if (!storage.value.includes(username)) {
      storage.value.push(username)
    }
  }

  /**
   * Remove username from local storage
   * if user is removed from local forage
   *
   * @param username
   */
  function removeUserFromStorage(username: string) {
    if (storage.value.includes(username)) {
      storage.value = storage.value.filter(u => u !== username)
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

    const rawUser = await userStorage.getItem('user')

    if (rawUser) {
      userStore.loadUser(rawUser)
    } else {
      // something happened,
      // it no longer exists
      removeUserFromStorage(username)
    }
  }

  return {
    storage,
    addUserToStorage,
    removeUserFromStorage,
    loadUsersFromStorage,
  };
}, {
  persist: true
});
