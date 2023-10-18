<template>
  <Profile
      :profile="profile"
  />

  <template v-if="options.rulers">
    <ToolRuler left />
    <ToolRuler right />
  </template>
</template>

<script setup lang="ts">
const route = useRoute()
const configStore = useConfigStore()
const userStore = useUserStore()

const username: string = route.params.username.toString()

const options = computed(() => configStore.options)
const profile = computed(() => userStore.profile)

onBeforeMount(async () => {
  await userStore.loadUser(username).catch((e) => {
    console.error(e)
  })
})
</script>
