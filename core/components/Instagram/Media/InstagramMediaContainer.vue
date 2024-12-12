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
  <MediaContainer
    :media="media"
    :type="type"
    @contextmenu="onMediaContextMenu"
  >
    <suspense>
      <slot />
    </suspense>

    <template v-if="contextMenu" #menu>

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

    <template #actions>
      <slot name="actions" />
    </template>

    <MediaTypeIcon :type="type" />

  </MediaContainer>
</template>

<style scoped lang="scss">
:global(.media__icon-edit) {
  display: inline-block;
  color: white;
  opacity: 0;
}

.dx-media {
  position: relative;
  aspect-ratio: 1;
  width: 100%;
  height: 100%;

  &--format-reel {
    aspect-ratio: 9 / 16;
  }

  &__type {
    position: absolute;
    top: 12px;
    right: 12px;
    color: white;
    font-size: 16px;
    pointer-events: none;
    z-index: 1;

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

  :deep(.dx-media__context-menu) {
    bottom: 0;
    right: 0;
  }
}
</style>
