<script setup lang="ts">
defineProps<{
  profile: IUserProfile
  media: IMedia
  collection?: IMediaCollection
  contextMenu?: boolean
  detailOnClick?: boolean
}>()
</script>

<template>
  <suspense>
    <InstagramMediaImage
      v-if="media.type === 'image'"
      :context-menu="contextMenu"
      :media="media"
    />
  </suspense>

  <suspense>
    <InstagramMediaVideo
      v-if="media.type === 'video'"
      :context-menu="contextMenu"
      :media="media"
      cover-selector
      :reel="collection === 'reels'"
    />
  </suspense>

  <InstagramMediaAlbum
    v-if="media.type === 'album'"
    :context-menu="contextMenu"
    :media="media"
    :profile="profile"
  />

  <InstagramMediaIframe
    v-if="media.type === 'iframe'"
    :context-menu="contextMenu"
    :media="media"
    :reel="collection === 'reels'"
  />
</template>

<style scoped lang="scss"></style>
