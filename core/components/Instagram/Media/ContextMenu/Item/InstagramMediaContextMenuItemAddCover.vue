<script setup lang="ts">
const props = defineProps<{
  media: IMediaVideo
}>()

const emit = defineEmits(["close"])

const { open, onChange } = useFileDialog({
  accept: "image/jpg, image/jpeg, image/png",
  multiple: false,
})

onChange((files: null | File[]) => {
  if (!files) return

  const file = files[0]

  props.media.setCover(file)
  props.media.save()

  emit("close")
})
</script>

<template>
  <v-list-item @click="open">
    <v-list-item-title
      v-text="$t('instagram.profile.menu.addCover')"
    />
  </v-list-item>
</template>

<style scoped lang="scss"></style>
