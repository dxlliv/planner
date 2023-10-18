<template>
  <iframe class="ig-profile-media ig-profile-media--iframe" :src="media.href" />
</template>

<script setup lang="ts">
defineProps<{
  media: IProfileMediaIframe
}>()
</script>

<style scoped lang="scss">
.ig-profile-media--iframe {
  width: 100%;
  height: 100%;
  border: 0;
  aspect-ratio: 1;
}
</style>
