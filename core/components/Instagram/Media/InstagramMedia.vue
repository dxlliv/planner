<script setup lang="ts">
defineProps<{
  user: IUser
  media: IMedia
  isFromDetail?: boolean
  contextMenu?: boolean
  navigation?: boolean
  pagination?: boolean
}>()
</script>

<template>
  <suspense>
    <InstagramMediaImage
      v-if="media.type === 'image'"
      :is-from-detail="isFromDetail"
      :context-menu="contextMenu"
      :media="media"
    >
      <template v-slot:link>
        <slot name="link" />
      </template>
    </InstagramMediaImage>
  </suspense>

  <suspense>
    <InstagramMediaVideo
      v-if="media.type === 'video'"
      :is-from-detail="isFromDetail"
      :context-menu="contextMenu"
      :media="media"
      cover-selector
    >
      <template v-slot:link>
        <slot name="link" />
      </template>
    </InstagramMediaVideo>
  </suspense>

  <InstagramMediaAlbum
    v-if="media.type === 'album'"
    :is-from-detail="isFromDetail"
    :navigation="navigation"
    :pagination="pagination"
    :context-menu="contextMenu"
    :media="media"
    :user="user"
  >
    <template v-slot:link>
      <slot name="link" />
    </template>
  </InstagramMediaAlbum>

  <InstagramMediaIframe
    v-if="media.type === 'iframe'"
    :is-from-detail="isFromDetail"
    :context-menu="contextMenu"
    :media="media"
  >
    <template v-slot:link>
      <slot name="link" />
    </template>
  </InstagramMediaIframe>
</template>

<style scoped lang="scss"></style>
