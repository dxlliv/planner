<script setup lang="ts">
const props = defineProps<{
  username: string
  platform: string
}>()

const userStore = useUserStore()
const user = ref()

user.value = userStore.getUser(props.username, props.platform)

if (user) {
  user.value.media.fetch()
}

onBeforeMount(async () => {
  await user.value.loadUserClient()
})

useSeoMeta(user.value.profile.seoMeta)
</script>

<template>
  <LayoutInstagram :user="user">
    <InstagramUser :user="user" />
  </LayoutInstagram>
</template>