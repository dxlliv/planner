<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
const extraStore = useExtraStore();
const themeStore = useThemeStore();
const theme = useTheme()

// app initialize
useConfigStore().loadLocalConfig()
useConfigStore().loadStorageConfig()

// restore previous dark theme state
themeStore.restorePreviousState(theme)

// kbd shortcuts
onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (String.fromCharCode(e.keyCode) === "R") {
      extraStore.toggleGuides();
    }
    if (String.fromCharCode(e.keyCode) === "D") {
      themeStore.toggleDarkTheme(theme);
    }
  });
});
</script>

<style lang="scss">
@import "assets/styles/index.scss";
</style>
