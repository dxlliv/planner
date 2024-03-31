<script setup lang="ts">
defineProps<{
  media: IMedia|IMediaAlbum|IMediaVideo|IMediaIframe
}>()

const emit = defineEmits(["update:modelValue"])

function onCloseContextMenu() {
  emit("update:modelValue", false)
}
</script>

<template>
  <v-menu
    content-class="ig-media__context-menu text-left"
    transition="slide-y-transition"
    attach
    :close-on-content-click="false"
    @click.stop
  >
    <!-- clone to reel -->
    <v-list density="compact" class="ma-3 py-2">
      <InstagramMediaContextMenuGroup
        v-if="['video', 'iframe'].includes(media.type) && !media.isReel"
        title="Reel"
      >
        <InstagramMediaContextMenuItemCloneToReel
          v-if="['video', 'iframe'].includes(media.type) && !media.isReel"
          :media="media"
          @close="onCloseContextMenu"
        />
      </InstagramMediaContextMenuGroup>

      <!-- album actions -->
      <InstagramMediaContextMenuGroup
        v-if="'list' in media"
        title="Album"
      >
        <InstagramMediaContextMenuItemAddToAlbum
          :media="media"
          @close="onCloseContextMenu"
        />
        <InstagramMediaContextMenuItemReplaceMediaAlbum
          :media="media"
          @close="onCloseContextMenu"
        />
        <InstagramMediaContextMenuItemRemoveFromAlbum
          v-if="media.list.length > 1"
          :media="media"
          @close="onCloseContextMenu"
        />
      </InstagramMediaContextMenuGroup>

      <!-- video/iframe actions -->
      <InstagramMediaContextMenuGroup
        v-if="'cover' in media"
        title="Cover"
      >
        <InstagramMediaContextMenuItemAddCover
          v-if="!media.cover"
          :media="media"
          @close="onCloseContextMenu"
        />
        <InstagramMediaContextMenuItemReplaceCover
          v-if="media.cover"
          :media="media"
          @close="onCloseContextMenu"
        />
        <InstagramMediaContextMenuItemRemoveCover
          v-if="media.cover"
          :media="media"
          @close="onCloseContextMenu"
        />
      </InstagramMediaContextMenuGroup>

      <!-- image/video actions -->
      <InstagramMediaContextMenuGroup
        v-if="['image', 'video'].includes(media.type)"
        title="Media"
      >
        <InstagramMediaContextMenuItemReplaceMedia
          :media="media"
          @close="onCloseContextMenu"
        />
        <InstagramMediaContextMenuItemConvertToAlbum
          v-if="!media.isReel"
          :media="media"
          @close="onCloseContextMenu"
        />
        <InstagramMediaContextMenuItemConvertToIframe
          v-if="media.type === 'image'"
          :media="media"
          @close="onCloseContextMenu"
        />
      </InstagramMediaContextMenuGroup>

      <v-divider class="my-1" />

      <!-- media delete -->
      <InstagramMediaContextMenuItemRemove
        :media="media"
        @close="onCloseContextMenu"
      />
    </v-list>
  </v-menu>
</template>

<style lang="scss">
.ig-media__context-menu {
  .v-list-item {
    min-height: 24px;
    padding-top: 2px;
    padding-bottom: 2px;

    &:first-child {
      margin-top: 0 !important;
    }

    &-title {
      font-size: 13px;
    }
  }
}
</style>
