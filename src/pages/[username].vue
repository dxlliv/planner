<script setup lang="ts">
const route = useRoute()

const username: string = route.params.username.toString()
const platform: string = usePlannerConfig().platform.default
</script>

<template>
  <PagePlannerProfile
    :username="username"
    :platform="platform"
  />
</template>