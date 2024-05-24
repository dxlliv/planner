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
      { 'ig-media--reel': media.isReel }
    ]"
    @contextmenu="onMediaContextMenu"
  >
    <suspense>
      <slot />
    </suspense>

    <template v-if="contextMenu">

      <template v-if="$vuetify.display.mdAndUp">
        <InstagramMediaMenuContext v-model="contextMenuValue">
          <InstagramMediaMenu class="ma-3 py-2" :media="media" />
        </InstagramMediaMenuContext>
      </template>

      <template v-else>
        <InstagramMediaMenuBottomSheet>
          <InstagramMediaMenu :media="media" />
        </InstagramMediaMenuBottomSheet>
      </template>

    </template>

    <div class="ig-media__type">
      <v-icon v-if="type === 'album'">mdi-checkbox-multiple-blank</v-icon>
      <v-icon v-if="type === 'video'">mdi-play</v-icon>
    </div>

    <div class="ig-media__actions">
      <slot name="actions" />
    </div>
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
  aspect-ratio: 1;
  width: 100%;
  height: 100%;

  &:hover {
    :deep(.media__icon-edit) {
      opacity: 1;
    }
  }

  &--reel {
    aspect-ratio: 9 / 16;
  }

  &__type {
    position: absolute;
    top: 12px;
    right: 15px;
    color: white;
    font-size: 14px;
    pointer-events: none;

    .mdi {
      &-play {
        font-size: 24px;
        margin-top: -3px;
        margin-right: -8px;
      }

      &-checkbox-multiple-blank {
        font-size: 17px;
        margin-top: -2px;
        margin-right: -4px;
      }
    }
  }

  &__actions {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: white;
    font-size: 14px;

    a {
      color: white;
    }

    @media (max-width: 480px) {
      right: 12px;
      font-size: 3dvw;
    }
  }

  :deep(.ig-media__context-menu) {
    bottom: 0;
    right: 0;
  }
}
</style>
