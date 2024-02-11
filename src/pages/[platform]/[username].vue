<script setup lang="ts">
const plannerConfig = usePlannerConfig()
const route = useRoute()
const userStore = useUserStore()

// get platform from route.params or from config (route platform param can be omitted)
const platform: string = route.params.platform
  ? route.params.platform.toString()
  : plannerConfig.platform.default

const userId: string = route.params.username.toString()

const user = userStore.getUser(userId, platform)

if (user) {
  user.media.fetch()
}
</script>

<template>
  <PagePlannerProfile :user="user" />
</template>