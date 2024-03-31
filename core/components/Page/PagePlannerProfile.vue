<script setup lang="ts">
const route = useRoute()

const user: User = route.meta.user

onBeforeMount(async () => {
  await user.loadUserClient()
})

useSeoMeta(user.profile.seoMeta)
</script>

<template>
  <LayoutInstagram :user="user">
    <InstagramUser :user="user" />
  </LayoutInstagram>
</template>