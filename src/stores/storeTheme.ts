import {ThemeInstance} from "vuetify";

export const useThemeStore = defineStore("theme", () => {
  const dark: Ref<any> = ref(false);

  /**
   * Restore previous dark theme preferences
   *
   * @param theme
   */
  function restorePreviousState(theme: ThemeInstance) {
    theme.global.name.value = !dark.value ? "light" : "dark";
  }

  /**
   * Toggle dark theme
   *
   * @param theme
   */
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
