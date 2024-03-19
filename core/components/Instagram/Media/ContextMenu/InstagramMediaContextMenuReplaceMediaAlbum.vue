<script setup lang="ts">
const props = defineProps<{
  media: IMediaImage
}>()

const emit = defineEmits(["close"])

const { open, onChange } = useFileDialog({
  accept: "image/*",
  multiple: false,
})

onChange((files: null | File[]) => {
  if (!files) return

  const file = files[0]

  props.media.setMediaAlbumImage(file)
  props.media.refresh()
  props.media.save()

  emit("close")
})
</script>

<template>
  <v-list-item @click="open">
    <v-list-item-title
      v-text="$t('instagram.profile.menu.replaceMedia')"
    />
  </v-list-item>
</template>

<style scoped lang="scss"></style>
