<script setup lang="ts">
const userStorageStore = useUserStorageStore();

await userStorageStore.initialize().then(async () => {
  await useUserConfigStore().loadUsersFromConfig()
  await useUserStorageStore().loadUsersFromStorage()
})
</script>

<template>
  <slot />
</template>

<style scoped lang="scss">

</style>