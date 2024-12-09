<script setup lang="ts">
defineProps<{
  src?: string
}>()
</script>

<template>
  <v-img
    cover height="100%"
    :aspect-ratio="1"
    :src="src"
  />
</template>

<style scoped lang="scss">
.v-img {
  pointer-events: none;
}
</style>