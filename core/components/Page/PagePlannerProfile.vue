<script setup lang="ts">
const props = defineProps<{
  username: string
  platform: string
}>()

const userStore = useUserStore()
const user = userStore.getUser(props.username, props.platform)

if (user) {
  user.media.fetch()
}
</script>

<template>
  <LayoutInstagram :user="user">
    <InstagramUser :user="user" />
  </LayoutInstagram>
</template>