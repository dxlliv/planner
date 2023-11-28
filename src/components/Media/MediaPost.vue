<script setup lang="ts">
defineProps<{
  media: IMedia;
  contextMenu?: boolean
}>()
</script>

<template>
  <suspense>
    <MediaImage
        v-if="media.type === 'image'"
        :context-menu="contextMenu"
        :media="media"
    />
  </suspense>

  <suspense>
    <MediaVideo
        v-if="media.type === 'video'"
        :context-menu="contextMenu"
        :media="media"
        cover-selector
    />
  </suspense>

  <MediaAlbum
      v-if="media.type === 'album'"
      :context-menu="contextMenu"
      :media="media"
  />

  <MediaIframe
      v-if="media.type === 'iframe'"
      :context-menu="contextMenu"
      :media="media"
  />
</template>