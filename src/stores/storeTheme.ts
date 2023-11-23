import {ThemeInstance} from "vuetify";

export const useThemeStore = defineStore("themex", () => {
  const dark: Ref<any> = ref(false);

  function restorePreviousState(theme: ThemeInstance) {
    theme.global.name.value = !dark.value ? "light" : "dark";
  }

  function toggleDarkTheme(theme: ThemeInstance) {
    theme.global.name.value = theme.global.name.value === "dark" ? "light" : "dark";
    dark.value = theme.global.name.value === "dark"
  }

  return {
    dark,
    toggleDarkTheme,
    restorePreviousState,
  };
}, {
  persist: true
});
