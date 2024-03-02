<script setup lang="ts">
const plannerConfig = usePlannerConfig()
const route = useRoute()
const userStore = useUserStore()

const userId: string = route.params.username.toString()
const user = userStore.getUser(userId, plannerConfig.platform.default)

if (user) {
  user.media.fetch()
}
</script>

<template>
  <PagePlannerProfile :user="user" />
</template>