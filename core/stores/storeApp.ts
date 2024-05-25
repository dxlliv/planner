export const useAppStore = defineStore("app", () => {
    const disableScroll: Ref<boolean> = ref(false)

    function setDisableScroll(value: boolean) {
      disableScroll.value = value
    }

    return {
      disableScroll,
      setDisableScroll,
    }
  }
)
