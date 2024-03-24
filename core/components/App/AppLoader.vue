<script setup lang="ts">
import { useTheme } from "vuetify";
import UserLoader from "../../lib/user/userLoader.class";

const themeStore = useThemeStore()
const theme = useTheme()

await UserLoader.loadUsersFromConfig()

onBeforeMount(async () => {
  // initialize temporary users
  await UserLoader.loadUsersFromStorage()
})

// restore previous dark theme state
themeStore.restorePreviousState(theme)
</script>

<template>
  <slot />

  <AppTools />
</template>

<style scoped lang="scss"></style>
