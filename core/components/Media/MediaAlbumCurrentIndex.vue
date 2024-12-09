<script setup lang="ts">
defineProps<{
  index: number
  max: number
}>()
</script>

<template>
  <v-badge
    class="dx-media__badge-index hidden-xs"
    color="transparent"
    :content="`${index} / ${max}`"
  />
</template>

<style scoped lang="scss">
.dx-media__badge-index {
  :deep(.v-badge__badge) {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.5) !important;
    backdrop-filter: blur(16px);
    letter-spacing: -0.5px;
    padding: 0 8px;
    mix-blend-mode: difference;
  }
}
</style>
