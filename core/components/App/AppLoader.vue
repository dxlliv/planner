<script setup lang="ts">
import { useTheme } from "vuetify";
import UserLoader from "£/lib/user/userLoader.class"

const userStore = useUserStore()
const themeStore = useThemeStore()
const theme = useTheme()

// load users from config
await UserLoader.loadUsersFromConfig()

// restore previous dark theme state
themeStore.restorePreviousState(theme)

onBeforeMount(async () => {
  // initialize temporary users
  await UserLoader.loadUsersFromStorage()

  for (const user of userStore.userList) {
    await user.loadUserClient()
  }
})
</script>

<template>
  <slot />

  <AppTools />
</template>