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
  <v-list density="compact" class="ig-media-menu">
      <InstagramMediaMenuGroup
        v-if="['video', 'iframe'].includes(media.type) && !media.isReel"
        title="Reel"
      >
        <InstagramMediaMenuItemCloneToReel
          v-if="['video', 'iframe'].includes(media.type) && !media.isReel"
          :media="media"
          @close="onCloseContextMenu"
        />
      </InstagramMediaMenuGroup>

      <!-- album actions -->
      <InstagramMediaMenuGroup
        v-if="'list' in media"
        title="Album"
      >
        <InstagramMediaMenuItemAddToAlbum
          :media="media"
          @close="onCloseContextMenu"
        />
        <InstagramMediaMenuItemReplaceMediaAlbum
          :media="media"
          @close="onCloseContextMenu"
        />
        <InstagramMediaMenuItemRemoveFromAlbum
          v-if="media.list.length > 1"
          :media="media"
          @close="onCloseContextMenu"
        />
      </InstagramMediaMenuGroup>

      <!-- video/iframe actions -->
      <InstagramMediaMenuGroup
        v-if="'cover' in media"
        title="Cover"
      >
        <InstagramMediaMenuItemAddCover
          v-if="!media.cover"
          :media="media"
          @close="onCloseContextMenu"
        />
        <InstagramMediaMenuItemReplaceCover
          v-if="media.cover"
          :media="media"
          @close="onCloseContextMenu"
        />
        <InstagramMediaMenuItemRemoveCover
          v-if="media.cover"
          :media="media"
          @close="onCloseContextMenu"
        />
      </InstagramMediaMenuGroup>

      <!-- image/video actions -->
      <InstagramMediaMenuGroup
        v-if="['image', 'video'].includes(media.type)"
        title="Media"
      >
        <InstagramMediaMenuItemReplaceMedia
          :media="media"
          @close="onCloseContextMenu"
        />
        <InstagramMediaMenuItemConvertToAlbum
          v-if="!media.isReel"
          :media="media"
          @close="onCloseContextMenu"
        />
        <InstagramMediaMenuItemConvertToIframe
          v-if="media.type === 'image'"
          :media="media"
          @close="onCloseContextMenu"
        />
      </InstagramMediaMenuGroup>

      <v-divider />

      <!-- media delete -->
      <InstagramMediaMenuItemRemove
        :media="media"
        @close="onCloseContextMenu"
      />
    </v-list>
</template>

<style lang="scss">

</style>
