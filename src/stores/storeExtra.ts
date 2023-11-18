export const useExtraStore = defineStore("extra", () => {
  const options: Ref<any> = ref({
    guides: false,
  });

  function toggleGuides() {
    options.value.guides = !options.value.guides

    // add body class for extra v-application padding
    document.body.classList[options.value.guides ? 'add' : 'remove']('tool-guides--enabled')
  }

  return {
    toggleGuides,
    options,
  };
});
