<script setup lang="ts">
import { useTheme } from "vuetify";
import UserLoader from "£/lib/user/userLoader.class"

const appStore = useAppStore()
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

onMounted(() => {
  document.addEventListener('touchmove', (e) => {
    if (appStore.disableScroll) {
      e.preventDefault()
    }
  }, { passive: false });
})
</script>

<template>
  <slot />

  <AppTools />
</template>