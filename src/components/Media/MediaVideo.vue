<template>
  <MediaPostContainer type="video" class="ig-media--video">

    <template v-if="!media.cover || typeof media.cover === 'number'">
      <video ref="videoElement" :src="media.file.path" />

      <MediaVideoCoverSelector
        :media="media"
        @updateCoverTime="onUpdateCoverTime"
      />
    </template>

    <template v-else-if="typeof media.cover === 'object'">
      <MediaImage :media="media.cover" />
    </template>

  </MediaPostContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  media: IMediaVideo;
}>()

const videoElement: Ref<HTMLVideoElement|null> = ref(null);
const sliderElement: Ref<any> = ref({});


function onUpdateCoverTime(value: number) {
  if (!videoElement.value) return

  videoElement.value.currentTime = value
}

onMounted(() => {
  if (!videoElement.value) return

  videoElement.value.addEventListener(
    "loadedmetadata",
    () => {
      if (!videoElement.value || typeof props.media.cover === 'object') return

      if (typeof props.media.cover === 'number') {
        videoElement.value.currentTime = props.media.cover
        sliderElement.value.max = videoElement.value.duration
      }
    },
    false,
  );
});
</script>

<style scoped lang="scss">
.ig-media {
  &--video {
    position: relative;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 1;
    }

    &:hover {
      :deep(.ig-media--video-slider) {
        opacity: 1;
      }
      :deep(.ig-media--video-slider__value) {
        opacity: 1;
      }
    }
  }
}
</style>
