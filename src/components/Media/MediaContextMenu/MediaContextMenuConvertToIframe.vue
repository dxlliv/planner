<script setup lang="ts">
const props = defineProps<{
  media: IMedia;
}>()

const emit = defineEmits(['close'])

function convertToAlbum() {
  const href: null | string = window.prompt('URL of the iframe', 'https://')

  if (href) {
    props.media.convertToIframe(href)
    props.media.user.save()
  }
}
</script>

<template>
  <v-list-item @click="convertToAlbum">
    <v-list-item-title>Convert to iframe</v-list-item-title>
  </v-list-item>
</template>

<style scoped lang="scss">

</style>