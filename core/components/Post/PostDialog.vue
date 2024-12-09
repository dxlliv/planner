<script setup lang="ts">
const display = useDisplay()

const dialogProps = computed(() => {
  if (display.smAndDown.value) {
    return {
      width: 480,
      maxWidth: '80vw',
      maxHeight: '80dvh',
      fullscreen: true,
    }
  }

  return {
    width: 'calc(385px + 80vh)',
    maxWidth: '90vw',
    maxHeight: 913,
  }
})
</script>

<template>
  <v-dialog v-bind="dialogProps">
    <slot />
  </v-dialog>
</template>

<style scoped lang="scss">
.v-dialog {
  width: calc(100% - 64px - 24px);
  max-width: 1200px;
  max-height: 913px;

  @media(max-width: 599px) {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
}
</style>