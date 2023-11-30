export const useUserSelectorStore = defineStore("user/selector", () => {
  const userStore = useUserStore()

  const users: Ref<string[]> = ref([])

  function addUserToSelectorList(username: string) {
    if (!users.value.includes(username)) {
      users.value.push(username)
    }
  }

  function removeUserFromSelectorList(username: string) {
    if (users.value.includes(username)) {
      users.value = users.value.filter(u => u !== username)
    }
  }

  function setUsersOrder(usernames: string[]) {
    users.value = usernames
  }

  const listOfUsers = computed(() => {
    const usersTemp = []

    for (const username of users.value) {
      const user = userStore.getUser(username)

      if (user && user.ready) {
        usersTemp.push(userStore.getUser(username))
      }
    }

    return usersTemp
  })

  const listOfUsernames = computed(() => {
    const usernamesTemp = []

    for (const username of users.value) {
      const user = userStore.getUser(username)

      if (user && user.ready) {
        usernamesTemp.push(username)
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
