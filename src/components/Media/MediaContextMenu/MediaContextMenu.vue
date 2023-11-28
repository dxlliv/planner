<script setup lang="ts">
const props = defineProps<{
  media: IMedia;
}>()

const emit = defineEmits(['update:modelValue'])

function onMediaRemove() {
  props.media.remove('posts')
  props.media.user.save()
}

function onCloseContextMenu() {
  emit('update:modelValue', false)
}
</script>

<template>
  <v-menu
      content-class="ig-media__context-menu"
      transition="slide-y-transition"
      location="bottom"
      location-strategy="connected"
      target="parent" :offset="[0, 0]"
      :close-on-content-click="false"
  >
    <v-list density="compact" class="mx-3">

      <MediaContextMenuReplaceMedia
          v-if="media.type === 'image' || media.type === 'video'"
          :media="media"
          @close="onCloseContextMenu"
      />
      <MediaContextMenuAddCover
          v-if="media.type === 'video' && !media.data.cover"
          :media="media"
          @close="onCloseContextMenu"
      />
      <MediaContextMenuReplaceCover
          v-if="media.type === 'video' && media.data.cover"
          :media="media"
          @close="onCloseContextMenu"
      />
      <MediaContextMenuRemoveCover
          v-if="media.type === 'video' && media.data.cover"
          :media="media"
          @close="onCloseContextMenu"
      />

      <v-divider />

      <v-list-item
          @click="onMediaRemove()" class="text-red"
      >
        <v-list-item-title>Remove</v-list-item-title>
      </v-list-item>

    </v-list>
  </v-menu>
</template>

<style lang="scss">
.ig-media__context-menu {
  .v-list-item {
    min-height: 32px;

    &-title {
      font-size: 14px;
    }
  }
}
</style>