<script setup lang="ts">
const props = defineProps<{
  media: IMediaImage | IMediaVideo
}>()

const emit = defineEmits(["close"])

function convertToAlbum() {
  props.media.convertToAlbum()
  props.media.user.save()
}
</script>

<template>
  <v-list-item @click="convertToAlbum">
    <v-list-item-title>Convert to album</v-list-item-title>
  </v-list-item>
</template>

<style scoped lang="scss"></style>
