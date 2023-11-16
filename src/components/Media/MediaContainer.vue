<script setup lang="ts">
defineProps<{
  type: string
}>()
</script>

<template>
  <div :class="['ig-media', `ig-media--${type}`]">
    <slot />

    <div class="ig-media__icon">
      <v-icon v-if="type === 'album'">mdi-folder-multiple-image</v-icon>
      <v-icon v-if="type === 'video'">mdi-play</v-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ig-media {
  position: relative;
  width: 100%;
  height: 100%;

  &__icon {
    position: absolute;
    top: 12px;
    right: 15px;
    color: white;
    font-size: 14px;

    .mdi-play {
      font-size: 28px;
      margin-top: -3px;
      margin-right: -8px;
    }
  }
}
</style>