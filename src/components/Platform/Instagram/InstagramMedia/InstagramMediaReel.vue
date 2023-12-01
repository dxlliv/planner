<script setup lang="ts">
defineProps<{
  media: IMedia;
  contextMenu?: boolean
}>()
</script>

<template>
  <suspense>
    <InstagramMediaVideo
        v-if="media.type === 'video'"
        :media="media"
        :context-menu="contextMenu"
        cover-selector
        reel
    />
  </suspense>

  <InstagramMediaIframe
      v-if="media.type === 'iframe'"
      :media="media"
      reel
  />
</template>