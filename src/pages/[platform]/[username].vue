<script setup lang="ts">
const route = useRoute()

const username: string = route.params.username.toString()
const platform: string = route.params.platform.toString()
</script>

<template>
  <PagePlannerProfile
    :username="username"
    :platform="platform"
  />
</template>