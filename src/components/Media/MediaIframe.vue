<template>
  <MediaContainer :type="media.data.reel && !iframeEnabled ? 'video' : 'iframe'" :class="{'ig-media--reel': reel}">
    <template v-if="!iframeEnabled">
      <MediaImage :media="media.data.cover" @click="iframeEnabled = true" />
    </template>

    <iframe v-else :src="media.data.href" />
  </MediaContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  media: MediaPost;
  reel?: boolean
}>();

const iframeEnabled = ref(typeof props.media.data.cover !== 'object' || !props.media.data.reel)
</script>

<style scoped lang="scss">
.ig-media {
  &--iframe {
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
      aspect-ratio: 1;
      vertical-align: top;
    }
  }

  &--reel {
    aspect-ratio: 9 / 16;
  }
}
</style>
