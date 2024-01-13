<template>
  <LayoutInstagram :user="user">
    <InstagramUser :user="user" />
  </LayoutInstagram>
</template>

<script setup lang="ts">
import LayoutInstagram from "../layouts/LayoutInstagram.vue"

const plannerConfig = usePlannerConfig()
const route = useRoute()
const userStore = useUserStore()

// get platform from route.params or from config (route platform param can be omitted)
const platform: string = route.params.platform
  ? route.params.platform.toString()
  : plannerConfig.platform.default

const id: string = route.params.username.toString()
const user = userStore.getUser(id, platform)

if (user) {
  user.media.fetch()
}
</script>
