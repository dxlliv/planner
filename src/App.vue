<template>
  <v-app>
    <router-view />

    <MainFooter />
  </v-app>
</template>

<script setup lang="ts">
const theme = useTheme();
const configStore = useConfigStore();

useConfigStore().loadConfig();

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (String.fromCharCode(e.keyCode) === "R") {
      configStore.options.rulers = !configStore.options.rulers;
    }
    if (String.fromCharCode(e.keyCode) === "D") {
      theme.global.name.value =
        theme.global.name.value === "dark" ? "light" : "dark";
    }
  });
});
</script>

<style lang="scss">
@import "assets/styles/variables.scss";
@import "assets/styles/index.scss";
@import "vue3-carousel/dist/carousel.css";
</style>
