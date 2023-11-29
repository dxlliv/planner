<script setup lang="ts">
const props = defineProps<{
  media: IMedia;
}>()

const emit = defineEmits(['update:modelValue'])

function onCloseContextMenu() {
  emit('update:modelValue', false)
}
</script>

<template>
  <v-menu
      content-class="ig-media__context-menu"
      transition="slide-y-transition" attach
      :close-on-content-click="false"
      @click.stop
  >
    <v-list density="compact" class="ma-3 py-2">

      <MediaContextMenuGroup
          v-if="['video', 'iframe'].includes(media.type) && !media.isReel"
          title="Reel"
      >

        <MediaContextMenuCloneToReel
            v-if="['video', 'iframe'].includes(media.type) && !media.isReel"
            :media="media"
            @close="onCloseContextMenu"
        />

      </MediaContextMenuGroup>

      <MediaContextMenuGroup
          v-if="['album'].includes(media.type)"
          title="Album"
      >
        <MediaContextMenuAddToAlbum
            :media="media"
            @close="onCloseContextMenu"
        />
        <MediaContextMenuRemoveFromAlbum
            v-if="media.list.length > 1"
            :media="media"
            @close="onCloseContextMenu"
        />
      </MediaContextMenuGroup>

      <MediaContextMenuGroup
          v-if="['video', 'iframe'].includes(media.type)"
          title="Cover"
      >
        <MediaContextMenuAddCover
            v-if="!media.cover"
            :media="media"
            @close="onCloseContextMenu"
        />
        <MediaContextMenuReplaceCover
            v-if="media.cover"
            :media="media"
            @close="onCloseContextMenu"
        />
        <MediaContextMenuRemoveCover
            v-if="media.cover"
            :media="media"
            @close="onCloseContextMenu"
        />
      </MediaContextMenuGroup>

      <MediaContextMenuGroup
          v-if="['image', 'video'].includes(media.type)"
          title="Media"
      >
        <MediaContextMenuReplaceMedia
            :media="media"
            @close="onCloseContextMenu"
        />
        <MediaContextMenuConvertToAlbum
            v-if="!media.isReel"
            :media="media"
            @close="onCloseContextMenu"
        />
        <MediaContextMenuConvertToIframe
            v-if="media.type === 'image'"
            :media="media"
            @close="onCloseContextMenu"
        />
      </MediaContextMenuGroup>

      <v-divider class="my-2" />

      <MediaContextMenuRemove
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