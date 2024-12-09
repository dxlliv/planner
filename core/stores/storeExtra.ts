export const useExtraStore = defineStore(
  "extra",
  () => {
    const options: Ref<any> = ref({
      appBar: false,
      guides: false,
    })

    /**
     * Toggle plxnner nav
     */
    function toggleAppBar() {
      options.value.appBar = !options.value.appBar

      // add body class for extra v-application padding
      document.body.classList[options.value.appBar ? "add" : "remove"](
        "dx-bar--enabled",
      )
    }

    /**
     * Toggle ruler/guides tor media alignment
     */
    function toggleGuides() {
      options.value.guides = !options.value.guides

      // add body class for extra v-application padding
      document.body.classList[options.value.guides ? "add" : "remove"](
        "tool-guides--enabled",
      )
    }

    return {
      toggleAppBar,
      toggleGuides,
      options,
    }
  },
  {
    persist: true,
  },
)
