<script setup lang="ts">
const props = defineProps<{
  media: IMediaVideo
}>()

const emit = defineEmits(["close"])

const { files, open, reset, onChange } = useFileDialog({
  accept: "image/*",
  multiple: false,
})

onChange((files: null | File[]) => {
  if (!files) return

  const file = files[0]

  props.media.setCover(file)
  props.media.refresh()
  props.media.save()

  emit("close")
})
</script>

<template>
  <v-list-item @click="open">
    <v-list-item-title>Replace cover</v-list-item-title>
  </v-list-item>
</template>

<style scoped lang="scss"></style>
