<script setup lang="ts">
import { useTheme } from "vuetify";
import UserLoader from "../../lib/user/userLoader.class";

const themeStore = useThemeStore()
const theme = useTheme()

// initialize users
await UserLoader.loadUsersFromConfig()
await UserLoader.loadUsersFromStorage()

// restore previous dark theme state
themeStore.restorePreviousState(theme)
</script>

<template>
  <slot />

  <AppTools />
</template>

<style scoped lang="scss"></style>
