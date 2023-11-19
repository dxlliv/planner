<script setup lang="ts">

</script>

<template>
  <v-dialog class="ig-media-dialog" :model-value="true">
    <slot />
  </v-dialog>
</template>

<style scoped lang="scss">
.ig-media-dialog {
  max-width: calc(100% - 64px - 64px);
}
</style>