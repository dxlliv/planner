import {getUsernameFromPlatformUser} from "../utils/utilsPlatform";

export const useUserSelectorStore = defineStore("user/selector", () => {
  const userStore = useUserStore()

  const platformUsers: Ref<string[]> = ref([])

  function addUserToSelectorList(userPath: string) {
    if (!platformUsers.value.includes(userPath)) {
      platformUsers.value.push(userPath)
    }
  }

  function removeUserFromSelectorList(userPath: string) {
    if (platformUsers.value.includes(userPath)) {
      platformUsers.value = platformUsers.value.filter(uP => uP !== userPath)
    }
  }

  function setUsersOrder(platformUsersReordered: string[]) {
    platformUsers.value = platformUsersReordered
  }

  const listOfUsers = computed(() => {
    const usersTemp = []

    for (const platformUser of platformUsers.value) {
      const user = userStore.getUser(platformUser)

      if (user && user.ready) {
        usersTemp.push(user)
      }
    }

    return usersTemp
  })

  const listOfUsernames = computed(() => {
    const usernamesTemp = []

    for (const platformUser of platformUsers.value) {
      const username = getUsernameFromPlatformUser(platformUser)
      const user = userStore.getUser(platformUser)

      if (user && user.ready) {
        usernamesTemp.push(platformUser)
      }
    }

    return usernamesTemp
  })

  return {
    platformUsers,
    listOfUsernames,
    listOfUsers,
    addUserToSelectorList,
    removeUserFromSelectorList,
    setUsersOrder,
  };
}, {
  persist: true
});
