<script setup lang="ts">

</script>

<template>
  <div class="ig-user-comments">
    <v-divider class="ma-0" />
    <slot />
    <v-divider class="ma-0" />
  </div>
</template>

<style scoped lang="scss">
svg {
  margin-top: 5px;
}

.v-sheet.v-theme--dark {
  svg {
    fill: white;
  }
}
</style>