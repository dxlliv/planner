<script setup lang="ts">
const props = defineProps<{
  media: IMediaIframe
  isFromDetail?: boolean
}>()

const iframeEnabled = ref(typeof props.media.cover !== "object")

function onMediaClick(e) {
  if (e.target.closest('.ig-media-detail')) {
    iframeEnabled.value = true
  }
}
</script>

<template>
  <InstagramMediaContainer
    :type="!iframeEnabled ? 'video' : 'iframe'"
    :media="media"
    :class="{ 'ig-media--reel': media.isReel }"
  >
    <template v-if="!iframeEnabled">
      <InstagramMediaImage
        :key="media.cover.id"
        :media="media.cover"
        @click="onMediaClick"
      />
    </template>

    <iframe v-else :src="media.href" />
  </InstagramMediaContainer>
</template>

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
