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

  emit("close")
})
</script>

<template>
  <v-list-item @click="open">
    <v-list-item-title
      v-text="$t('instagram.profile.menu.replaceCover')"
    />
  </v-list-item>
</template>

<style scoped lang="scss"></style>
