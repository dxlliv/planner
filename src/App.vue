<template>
  <v-app>
    <suspense>
      <AppLoader>
        <router-view />
      </AppLoader>
    </suspense>
  </v-app>
</template>

<script setup lang="ts">
const extraStore = useExtraStore();
const themeStore = useThemeStore();
const theme = useTheme()

// restore previous dark theme state
themeStore.restorePreviousState(theme)

// kbd shortcuts
onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (document.activeElement !== document.body) {
      return false
    }

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
@import "./assets/styles/index.scss";
</style>
