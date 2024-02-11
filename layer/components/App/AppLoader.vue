<script setup lang="ts">
import { useTheme } from "vuetify";
import Storage from "../../core/storage/storage.class";
import UserLoader from "../../core/user/userLoader.class";

const themeStore = useThemeStore()
const theme = useTheme()

Storage.initialize()

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
