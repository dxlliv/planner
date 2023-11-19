<template>
  <MediaContainer type="video" :class="{'ig-media--reel': reel}">

    <template v-if="!media.data.cover || typeof media.data.cover === 'number'">
      <video ref="videoElement" :src="media.data.file.path" />

      <MediaVideoCoverSelector
        v-if="coverSelector"
        :media="media"
        @updateCoverTime="onUpdateCoverTime"
      />
    </template>

    <template v-else-if="typeof media.data.cover === 'object'">
      <MediaImage :media="media.data.cover" />
    </template>

  </MediaContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  media: MediaPost
  coverSelector?: boolean
  reel?: boolean
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
      if (!videoElement.value || typeof props.media.data.cover === 'object') return

      if (typeof props.media.data.cover === 'number') {
        videoElement.value.currentTime = props.media.data.cover
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
      vertical-align: top;
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

  &--reel {
    video {
      aspect-ratio: 9 / 16;
    }
  }
}
</style>
