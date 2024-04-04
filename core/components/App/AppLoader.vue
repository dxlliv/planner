<script setup lang="ts">
import { useTheme } from "vuetify";
import UserLoader from "£/lib/user/userLoader.class"

const themeStore = useThemeStore()
const theme = useTheme()

// load users from config
await UserLoader.loadUsersFromConfig()

// restore previous dark theme state
themeStore.restorePreviousState(theme)

onBeforeMount(async () => {
  // initialize temporary users
  await UserLoader.loadUsersFromStorage()
})
</script>

<template>
  <slot />

  <AppTools />
</template>

<style scoped lang="scss"></style>
