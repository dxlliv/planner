<template>
  <MediaPostContainer class="ig-media--iframe">
    <iframe :src="media.href" />
  </MediaPostContainer>
</template>

<script setup lang="ts">
defineProps<{
  media: IMediaIframe;
}>();
</script>

<style scoped lang="scss">
.ig-media--iframe {
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    aspect-ratio: 1;
  }
}
</style>
