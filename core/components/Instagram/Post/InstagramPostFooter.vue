<script setup lang="ts">

</script>

<template>
  <div class="dx-post-footer">
    <div class="px-4 py-3">
      <slot name="prepend" />
      <slot name="date" />
    </div>
    <slot name="append" />
  </div>
</template>

<style scoped lang="scss">
.dx-post-footer {
  :deep(.v-btn) {
    position: absolute;
    top: 4px;
    right: 4px;
  }
  z-index: 2;
}
</style>
