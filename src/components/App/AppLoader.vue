<script setup lang="ts">
const userStorageStore = useUserStorageStore();
const themeStore = useThemeStore();
const theme = useTheme()

// initialize users
await userStorageStore.initialize().then(async () => {
  await useUserConfigStore().loadUsersFromConfig()
  await useUserStorageStore().loadUsersFromStorage()
})

// restore previous dark theme state
themeStore.restorePreviousState(theme)
</script>

<template>
  <slot />

  <AppTools />
</template>

<style scoped lang="scss">

</style>