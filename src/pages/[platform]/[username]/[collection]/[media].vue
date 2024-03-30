<script setup lang="ts">
const route = useRoute()

const platform: string = route.params.platform.toString()
const username: string = route.params.username.toString()
const collection: string = route.params.collection.toString()
const media: string = route.params.media.toString()
</script>

<template>
  <PagePlannerProfileMedia
      :platform="platform"
      :username="username"
      :collection="collection"
      :media="media"
  />
</template>