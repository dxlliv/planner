<script setup lang="ts">
defineProps<{
  media: IMedia;
}>()
</script>

<template>
  <suspense>
    <MediaVideo
        v-if="media.type === 'video'"
        :media="media"
        cover-selector
        reel
    />
  </suspense>

  <MediaIframe
      v-if="media.type === 'iframe'"
      :media="media"
      reel
  />
</template>