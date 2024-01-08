<script setup lang="ts">
const props = defineProps<{
  media: IMedia
}>()

const emit = defineEmits(["close"])

function onCloneMediaToReel() {
  props.media.cloneToReel()
  props.media.user.save()
}
</script>

<template>
  <v-list-item @click="onCloneMediaToReel">
    <v-list-item-title>Clone to reel</v-list-item-title>
  </v-list-item>
</template>

<style scoped lang="scss"></style>
