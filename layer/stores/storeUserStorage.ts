export const useUserStorageStore = defineStore(
  "user/storage",
  () => {
    const users: Ref<ITempUserReference[]> = ref([])

    /**
     * Add username to local storage
     * to easily detect which users
     * are stored in local forage
     *
     * @param tempUserReference
     */
    function addUserToStorageIndex(tempUserReference: ITempUserReference) {
      if (!users.value.includes(tempUserReference)) {
        users.value.push(tempUserReference)
      }
    }

    /**
     * Remove username from local storage
     * if user is removed from local forage
     *
     * @param tempUserReference
     */
    function removeUserFromStorageIndex(tempUserReference: ITempUserReference) {
      if (users.value.includes(tempUserReference)) {
        users.value = users.value.filter((uTR) => uTR !== tempUserReference)
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
