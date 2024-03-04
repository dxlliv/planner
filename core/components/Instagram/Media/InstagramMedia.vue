<script setup lang="ts">
defineProps<{
  profile: IUserProfile
  media: IMedia
  isFromDetail?: boolean
  contextMenu?: boolean
}>()
</script>

<template>
  <suspense>
    <InstagramMediaImage
      v-if="media.type === 'image'"
      :is-from-detail="isFromDetail"
      :context-menu="contextMenu"
      :media="media"
    />
  </suspense>

  <suspense>
    <InstagramMediaVideo
      v-if="media.type === 'video'"
      :is-from-detail="isFromDetail"
      :context-menu="contextMenu"
      :media="media"
      cover-selector
    />
  </suspense>

  <InstagramMediaAlbum
    v-if="media.type === 'album'"
    :is-from-detail="isFromDetail"
    :context-menu="contextMenu"
    :media="media"
    :profile="profile"
  />

  <InstagramMediaIframe
    v-if="media.type === 'iframe'"
    :is-from-detail="isFromDetail"
    :context-menu="contextMenu"
    :media="media"
  />
</template>

<style scoped lang="scss"></style>
