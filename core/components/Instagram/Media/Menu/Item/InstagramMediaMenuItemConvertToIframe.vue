<script setup lang="ts">
const props = defineProps<{
  media: IMedia
}>()

const emit = defineEmits(["close"])

function convertToIframe() {
  const href: null | string = window.prompt("URL of the iframe", "https://")

  if (href) {
    props.media.convertToIframe(href)
  }
}
</script>

<template>
  <v-list-item @click="convertToIframe">
    <v-list-item-title
      v-text="$t('profile.media.menu.convertToIframe')"
    />
  </v-list-item>
</template>

<style scoped lang="scss"></style>
