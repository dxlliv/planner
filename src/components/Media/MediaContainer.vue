<script setup lang="ts">
defineProps<{
  media: IMedia
  type: string
  contextMenu?: boolean
}>()

const contextMenuValue: Ref<boolean> = ref(false)

function onMediaContextMenu(e) {
  e.preventDefault()

  contextMenuValue.value = !contextMenuValue.value
}
</script>

<template>
  <div
      :class="['ig-media', `ig-media--${type}`]"
      @contextmenu="onMediaContextMenu"
  >
    <suspense>
      <slot />
    </suspense>

    <div class="ig-media__icon">
      <v-icon v-if="type === 'album'">mdi-folder-multiple-image</v-icon>
      <v-icon v-if="type === 'video'">mdi-play</v-icon>
    </div>

    <MediaContextMenu
        v-if="contextMenu"
        v-model="contextMenuValue"
        :media="media"
    />
  </div>
</template>

<style scoped lang="scss">
.ig-media {
  position: relative;
  max-width: 320px;
  aspect-ratio: 1;
  width: 100%;
  height: 100%;

  &__icon {
    position: absolute;
    top: 12px;
    right: 15px;
    color: white;
    font-size: 14px;
    pointer-events: none;

    .mdi-play {
      font-size: 28px;
      margin-top: -3px;
      margin-right: -8px;
    }
  }
}
</style>