<template>
  <MediaContainer
      :type="!iframeEnabled ? 'video' : 'iframe'"
      :media="media"
      :class="{'ig-media--reel': reel}"
  >
    <template v-if="!iframeEnabled">
      <MediaImage :media="media.cover" @click="iframeEnabled = true" />
    </template>

    <iframe v-else :src="media.href" />
  </MediaContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  media: IMediaIframe;
  reel?: boolean
}>();

const iframeEnabled = ref(typeof props.media.cover !== 'object')
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
