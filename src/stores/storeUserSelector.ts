export const useUserSelectorStore = defineStore("user/selector", () => {
  const userStore = useUserStore()

  const users: Ref<string[]> = ref([])

  /**
   * Add user id to selector list
   *
   * @param id
   */
  function addUserToSelectorList(id: string) {
    if (!users.value.includes(id)) {
      users.value.push(id)
    }
  }

  /**
   * Remove user id from selector list
   *
   * @param id
   */
  function removeUserFromSelectorList(id: string) {
    if (users.value.includes(id)) {
      users.value = users.value.filter(userId => userId !== id)
    }
  }

  /**
   * Reorder user selector list
   *
   * @param idsReordered
   */
  function setUsersSelectorOrder(idsReordered: string[]) {
    users.value = idsReordered
  }

  /**
   * List of ready users
   */
  const listOfUsers = computed(() => {
    const usersTemp = []

    for (const platformUser of users.value) {
      const user = userStore.getUser(platformUser)

      if (user && user.ready) {
        usersTemp.push(user)
      }
    }

    return usersTemp
  })

  /**
   * List of usernames
   */
  const listOfUsernames = computed(() => {
    const usernamesTemp = []

    for (const id of users.value) {
      const user = userStore.getUser(id)

      if (user && user.ready) {
        usernamesTemp.push(id)
      }
    }

    return usernamesTemp
  })

  return {
    users,
    listOfUsernames,
    listOfUsers,
    addUserToSelectorList,
    removeUserFromSelectorList,
    setUsersSelectorOrder,
  };
}, {
  persist: true
});
