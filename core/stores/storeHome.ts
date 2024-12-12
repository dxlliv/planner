export const useHomeStore = defineStore("home", () => {
    const profilePreview: Ref<string> = ref('')

    function setProfilePreview(value: string) {
      profilePreview.value = value
    }

    return {
      profilePreview,
      setProfilePreview,
    }
  }
)
