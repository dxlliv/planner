<script setup lang="ts">
const props = defineProps<{
  media: IMediaImage;
}>()

const emit = defineEmits(['close'])

const { open, onChange } = useFileDialog({
  accept: 'image/*',
  multiple: false
})

onChange((files: null | File[]) => {
  if (!files) return

  const file = files[0]

  props.media.setMediaImage(file)
  props.media.save()
  props.media.refresh()

  emit('close')
})
</script>

<template>
  <v-list-item
      v-if="media.type === 'image'"
      @click="open"
  >
    <v-list-item-title>Replace media</v-list-item-title>
  </v-list-item>
</template>

<style scoped lang="scss">

</style>