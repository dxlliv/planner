<script setup lang="ts">
const props = defineProps<{
  media: IMediaImage | IMediaVideo
}>()

const emit = defineEmits(["close"])

function convertToAlbum() {
  props.media.convertToAlbum()
}
</script>

<template>
  <v-list-item @click="convertToAlbum">
    <v-list-item-title
      v-text="$t('profile.media.menu.convertToAlbum')"
    />
  </v-list-item>
</template>

<style scoped lang="scss"></style>
