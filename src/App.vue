<template>
  <v-app>
    <router-view />

    <MainFooter />
  </v-app>
</template>

<script setup lang="ts">
import {useTheme} from "vuetify";

const options = reactive({
  rulers: false
})

provide("options", options)

useConfigStore().loadConfig()

const theme = useTheme()

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (String.fromCharCode(e.keyCode) === "R") {
      options.rulers = !options.rulers
    }
    if (String.fromCharCode(e.keyCode) === "D") {
      theme.global.name.value = theme.global.name.value === "dark" ? "light" : "dark"
    }
  })
})
</script>

<style lang="scss">
@import "assets/styles/variables.scss";
@import "assets/styles/index.scss";
</style>
