<script setup lang="ts">

</script>

<template>
  <v-dialog>
    <slot />
  </v-dialog>
</template>

<style scoped lang="scss">
@import "vuetify/lib/styles/settings/_variables";

.v-dialog {
  width: calc(100% - 64px - 24px);
  max-width: 1200px;
  max-height: 913px;

  @media #{map-get($display-breakpoints, 'xs')} {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
}
</style>