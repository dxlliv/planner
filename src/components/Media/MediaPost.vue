<script setup lang="ts">
defineProps<{
  media: IMedia;
}>()
</script>

<template>
  <suspense>
    <MediaImage
        v-if="media.type === 'image'"
        :media="media"
    />
  </suspense>

  <suspense>
    <MediaVideo
        v-if="media.type === 'video'"
        :media="media"
        cover-selector
    />
  </suspense>

  <MediaAlbum
      v-if="media.type === 'album'"
      :media="media"
  />

  <MediaIframe
      v-if="media.type === 'iframe'"
      :media="media"
  />
</template>