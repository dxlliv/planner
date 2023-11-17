<script setup lang="ts">
defineProps<{
  media: IMediaPost;
}>()
</script>

<template>
  <MediaImage
      v-if="media.type === 'image'"
      :media="media"
  />

  <MediaVideo
      v-if="media.type === 'video'"
      :media="media"
      cover-selector
  />

  <MediaAlbum
      v-if="media.type === 'album'"
      :media="media"
  />

  <MediaIframe
      v-if="media.type === 'iframe'"
      :media="media"
  />
</template>