<script setup lang="ts">
defineProps<{
  user: any
}>()

const tab = ref("posts")
</script>

<template>
  <InstagramUserProfile :user="user" />

  <InstagramUserTabs
    :media="user.media"
    :active="tab"
    @select="(value: string) => (tab = value)"
  />

  <InstagramUserGrid
    :user="user"
    :collection="tab"
  />
</template>