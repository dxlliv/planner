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
    :class="[
      'ig-media',
      `ig-media--${type}`,
    ]"
    @contextmenu="onMediaContextMenu"
  >
    <suspense>
      <slot />
    </suspense>

    <div class="ig-media__type">
      <v-icon v-if="type === 'album'">mdi-folder-multiple-image</v-icon>
      <v-icon v-if="type === 'video'">mdi-play</v-icon>
    </div>

    <div class="ig-media__actions">
      <slot name="actions" />
    </div>

    <InstagramMediaContextMenu
      v-if="contextMenu"
      v-model="contextMenuValue"
      :media="media"
    />
  </div>
</template>

<style scoped lang="scss">
:global(.media__icon-edit) {
  display: inline-block;
  color: white;
  opacity: 0;
}

.ig-media {
  position: relative;
  max-width: 320px;
  aspect-ratio: 1;
  width: 100%;
  height: 100%;

  &:hover {
    :deep(.media__icon-edit) {
      opacity: 1;
    }
  }

  &__type {
    position: absolute;
    top: 12px;
    right: 15px;
    color: white;
    font-size: 14px;
    pointer-events: none;
  }

  &__actions {
    position: absolute;
    bottom: 12px;
    right: 15px;
    color: white;
    font-size: 14px;
    pointer-events: none;
    z-index: 9999;

    a {
      color: white;
    }

    .mdi-play {
      font-size: 28px;
      margin-top: -3px;
      margin-right: -8px;
    }

    @media (max-width: 480px) {
      top: 10px;
      right: 12px;
      font-size: 3dvw;

      .mdi-play {
        font-size: 6dvw;
        margin-top: -3px;
        margin-right: -8px;
      }
    }
  }

  :deep(.ig-media__context-menu) {
    bottom: 0;
    right: 0;
  }
}
</style>
