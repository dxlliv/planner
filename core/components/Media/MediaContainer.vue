<script setup lang="ts">
withDefaults(defineProps<{
  type: string
  format?: string
}>(), {
  format: 'default'
})
</script>

<template>
  <div
    :class="[
      'dx-media',
      `dx-media--${type}`,
      `dx-media--format-${format}`,
    ]"
  >
    <suspense>
      <slot />
    </suspense>

    <div class="dx-media__type-icon">
      <v-icon
        v-if="type === 'album'"
        icon="mdi-checkbox-multiple-blank"
      />
      <v-icon
        v-if="type === 'video'"
        icon="mdi-play"
      />
    </div>

    <slot name="menu" />

    <div class="dx-media__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dx-media {
  position: relative;
  aspect-ratio: 1;
  width: 100%;
  height: 100%;

  &--reel {
    aspect-ratio: 9 / 16;
  }

  &__type-icon {
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
}
</style>