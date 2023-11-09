<template>
  <ProfileMediaContainer class="ig-profile-media--iframe">
    <iframe :src="media.href" />
  </ProfileMediaContainer>
</template>

<script setup lang="ts">
defineProps<{
  media: IProfileMediaIframe;
}>();
</script>

<style scoped lang="scss">
.ig-profile-media--iframe {
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    aspect-ratio: 1;
  }
}
</style>
