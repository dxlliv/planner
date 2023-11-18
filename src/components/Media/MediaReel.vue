<script setup lang="ts">
defineProps<{
  media: IMediaVideo|IMediaIframe;
}>()
</script>

<template>
  <MediaVideo
      v-if="media.type === 'video'"
      :media="media"
      cover-selector
      reel
  />

  <MediaIframe
      v-if="media.type === 'iframe'"
      :media="media"
      reel
  />
</template>