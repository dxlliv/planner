export const useUserSelectorStore = defineStore("user/selector", () => {
  const userStore = useUserStore()

  const users: Ref<string[]> = ref([])

  function addUserToSelectorList(id: string) {
    if (!users.value.includes(id)) {
      users.value.push(id)
    }
  }

  function removeUserFromSelectorList(id: string) {
    if (users.value.includes(id)) {
      users.value = users.value.filter(userId => userId !== id)
    }
  }

  function setUsersOrder(idsReordered: string[]) {
    users.value = idsReordered
  }

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
    setUsersOrder,
  };
}, {
  persist: true
});
