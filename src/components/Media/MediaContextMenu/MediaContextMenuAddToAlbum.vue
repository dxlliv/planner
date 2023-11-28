<script setup lang="ts">
const props = defineProps<{
  media: IMediaAlbum;
}>()

const emit = defineEmits(['close'])

const { files, open, reset, onChange } = useFileDialog({
  accept: 'image/jpg, image/jpeg, image/png',
  multiple: false
})

onChange((files: null | File[]) => {
  if (!files) return

  const file = files[0]

  props.media.addToAlbum(file)
  props.media.save()

  emit('close')
})
</script>

<template>
  <v-list-item @click="open">
    <v-list-item-title>Add to album</v-list-item-title>
  </v-list-item>
</template>

<style scoped lang="scss">

</style>