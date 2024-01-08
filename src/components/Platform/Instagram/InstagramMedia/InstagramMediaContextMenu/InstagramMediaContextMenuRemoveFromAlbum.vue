<script setup lang="ts">
const props = defineProps<{
  media: IMediaAlbum
}>()

const emit = defineEmits(["close"])

function onRemoveFromAlbum() {
  props.media.removeFromAlbum()

  emit("close")
}
</script>

<template>
  <v-list-item @click="onRemoveFromAlbum">
    <v-list-item-title>Remove from album</v-list-item-title>
  </v-list-item>
</template>

<style scoped lang="scss"></style>
