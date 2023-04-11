<template>
  <ProfilePage
    :profile="profile"
  />

  <template v-if="options.rulers">
    <ToolRuler left />
    <ToolRuler right />
  </template>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const profileStore = useProfileStore()

const profile = computed(() => profileStore.profile)
const options = inject('options')

onBeforeMount(async () => {
  await profileStore.loadProfile(route.params.username)
    .catch(e => {
      console.error(e)
      router.push({ name: 'index', hash: '#404' })
    })
})
</script>