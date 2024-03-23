<script setup lang="ts">

</script>

<template>
  <div class="ig-post-footer ">
    <div class="pa-3">
      <slot name="prepend" />
      <slot name="date" />
    </div>
    <slot name="append" />
  </div>
</template>

<style scoped lang="scss">
.ig-post-footer {
  :deep(.v-btn) {
    position: absolute;
    top: 4px;
    right: 4px;
  }
}
</style>
