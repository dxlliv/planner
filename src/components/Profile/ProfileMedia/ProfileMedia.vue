<script setup lang="ts">
defineProps<{
  media: IProfileMedia;
}>()
</script>

<template>
  <ProfileMediaImage v-if="media.type === 'image'" :media="media" />
  <ProfileMediaVideo v-if="media.type === 'video'" :media="media" />
  <ProfileMediaAlbum v-if="media.type === 'album'" :media="media" />
  <ProfileMediaIframe v-if="media.type === 'iframe'" :media="media" />
</template>