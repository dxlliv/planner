<script setup lang="ts">
const props = defineProps<{
  media: IMediaAlbum
}>()

const emit = defineEmits(["close"])

const { files, open, reset, onChange } = useFileDialog({
  accept: "image/jpg, image/jpeg, image/png",
  multiple: false,
})

onChange((files: null | File[]) => {
  if (!files) return

  const file = files[0]

  props.media.addToAlbum(file)

  emit("close")
})
</script>

<template>
  <v-list-item @click="open">
    <v-list-item-title
      v-text="$t('instagram.profile.menu.addToAlbum')"
    />
  </v-list-item>
</template>

<style scoped lang="scss"></style>
