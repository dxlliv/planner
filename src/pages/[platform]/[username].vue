<script setup lang="ts">
const route = useRoute()
const userStore = useUserStore()

const platform: string = route.params.platform.toString()
const userId: string = route.params.username.toString()

const user = userStore.getUser(userId, platform)

if (user) {
  user.media.fetch()
}
</script>

<template>
  <PagePlannerProfile :user="user" />
</template>