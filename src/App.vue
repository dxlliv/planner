<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
const theme = useTheme();
const extraStore = useExtraStore();

// app initialize
useConfigStore().loadConfig()

// kbd shortcuts
onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (String.fromCharCode(e.keyCode) === "R") {
      extraStore.toggleGuides();
    }
    if (String.fromCharCode(e.keyCode) === "D") {
      theme.global.name.value =
        theme.global.name.value === "dark" ? "light" : "dark";
    }
  });
});
</script>

<style lang="scss">
@import "assets/styles/index.scss";
</style>
