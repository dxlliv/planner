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

  console.log('EHO', props.media)

  props.media.setMediaImage(file)
  props.media.refresh()

  emit("close")
})
</script>

<template>
  <v-list-item @click="open">
    <v-list-item-title
      v-text="$t('profile.media.menu.replaceMedia')"
    />
  </v-list-item>
</template>

<style scoped lang="scss"></style>
