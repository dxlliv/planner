<script setup lang="ts">
const props = defineProps<{
  media: IMediaVideo;
}>()

const emit = defineEmits(['close'])

function onMediaCoverRemove() {
  props.media.removeCoverImage()
  props.media.save()

  emit('close')
}
</script>

<template>
  <v-list-item
      v-if="media.type === 'video' && media.data.cover"
      @click="onMediaCoverRemove"
  >
    <v-list-item-title>Remove cover</v-list-item-title>
  </v-list-item>
</template>

<style scoped lang="scss">

</style>