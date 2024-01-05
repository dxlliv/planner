<script setup lang="ts">
defineProps<{
  profile: IUserProfile;
  media: IMedia;
  contextMenu?: boolean
  detailOnClick?: boolean
}>()
</script>

<template>
  <suspense>
    <InstagramMediaImage
        v-if="media.type === 'image'"
        :detail-on-click="detailOnClick"
        :context-menu="contextMenu"
        :media="media"
    />
  </suspense>

  <suspense>
    <InstagramMediaVideo
        v-if="media.type === 'video'"
        :detail-on-click="detailOnClick"
        :context-menu="contextMenu"
        :media="media"
        cover-selector
    />
  </suspense>

  <InstagramMediaAlbum
      v-if="media.type === 'album'"
      :detail-on-click="detailOnClick"
      :context-menu="contextMenu"
      :media="media"
      :profile="profile"
  />

  <InstagramMediaIframe
      v-if="media.type === 'iframe'"
      :detail-on-click="detailOnClick"
      :context-menu="contextMenu"
      :media="media"
  />

  <v-dialog v-if="detailOnClick" activator="parent">
    <InstagramPostDetail
      :media="media"
      :profile="profile"
    />
  </v-dialog>
</template>

<style scoped lang="scss">
.v-dialog {
  max-width: calc(100% - 64px - 64px);
  max-height: 913px;
}
</style>