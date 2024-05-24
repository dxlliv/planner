<script setup lang="ts">
const props = defineProps<{
  media: IMediaVideo|IMediaIframe
}>()

const emit = defineEmits(["close"])

function onCloneMediaToReel() {
  props.media.cloneToReel()

  emit("close")
}
</script>

<template>
  <v-list-item @click="onCloneMediaToReel">
    <v-list-item-title
      v-text="$t('instagram.profile.menu.cloneToReel')"
    />
  </v-list-item>
</template>

<style scoped lang="scss"></style>
