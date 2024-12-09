<script setup lang="ts">
const props = defineProps<{
  media: IMediaIframe
  isFromDetail?: boolean
}>()

const iframeEnabled = ref(typeof props.media.cover !== "object")

function onMediaClick(e) {
  if (e.target.closest('.dx-media-detail')) {
    iframeEnabled.value = true
  }
}
</script>

<template>
  <InstagramMediaContainer
    :type="!iframeEnabled ? 'video' : 'iframe'"
    :media="media"
  >
    <template v-if="!iframeEnabled">
      <InstagramMediaImage
        :key="media.cover.id"
        :media="media.cover"
        @click="onMediaClick"
      />
    </template>

    <iframe v-else :src="media.href" />

    <template v-slot:actions>

      <slot name="actions" />

    </template>

    <slot name="link" />

  </InstagramMediaContainer>
</template>

<style scoped lang="scss">
.dx-media {
  &--iframe {
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
      aspect-ratio: 1;
      vertical-align: top;
    }
  }
}
</style>
