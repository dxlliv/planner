export const useProfileStore = defineStore("profile", () => {
  const configStore = useConfigStore()

  const profile: Ref<IProfile> = ref({} as IProfile)

  function setProfile(data: IProfile): void {
    profile.value = data
  }

  async function loadProfile(username: string): Promise<boolean> {
    if (Object.prototype.hasOwnProperty.call(configStore.profiles, username)) {
      profile.value = configStore.profiles[username]

      return true
    }

    throw new Error("Profile not found")
  }

  return {
    profile,
    setProfile,
    loadProfile,
  }
})
