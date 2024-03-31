<script setup lang="ts">
const route = useRoute()

const platform: string = route.params.platform.toString()
const username: string = route.params.username.toString()
</script>

<template>
  <PagePlannerProfile
      :username="username"
      :platform="platform"
  />
</template>