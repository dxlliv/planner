<script setup lang="ts">
const props = defineProps<{
  media: IMediaVideo
}>()

const emit = defineEmits(["close"])

function onMediaCoverRemove() {
  props.media.removeCover()
  props.media.refresh()
  props.media.save()

  emit("close")
}
</script>

<template>
  <v-list-item @click="onMediaCoverRemove">
    <v-list-item-title
      v-text="$t('instagram.profile.menu.removeCover')"
    />
  </v-list-item>
</template>

<style scoped lang="scss"></style>
