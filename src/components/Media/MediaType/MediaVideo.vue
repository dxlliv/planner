<template>
  <MediaContainer
      type="video"
      :media="media"
      :class="{'ig-media--reel': reel}"
  >

    <template v-if="!media.data.cover || media.data.coverTime">
      <video
          ref="videoElement"
          :src="src"
          :autoplay="isPlaying"
          @click="isPlaying = !isPlaying"
      />

      <MediaVideoCoverSelector
        v-if="coverSelector"
        :media="media"
        :max-length="videoMaxLength"
        @updateCoverTime="onUpdateCoverTime"
      />
    </template>

    <template v-else-if="typeof media.data.cover === 'object'">
      <MediaImage
          :media="media.data.cover"
          @click="isPlaying = true"
      />
    </template>

  </MediaContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  media: IMediaVideo
  coverSelector?: boolean
  playable?: boolean
  reel?: boolean
}>()

const isPlaying: Ref<boolean> = ref(false)

const src = await handleMediaForSrc(props.media)

const videoElement: Ref<HTMLVideoElement|null> = ref(null);
const videoMaxLength: Ref<number> = ref(0);

function onUpdateCoverTime(value: number) {
  if (!videoElement.value) return

  videoElement.value.currentTime = value

  // update media coverTime & save changes
  props.media.setCoverTime(value)
  props.media.save()
}

onMounted(() => {
  if (!videoElement.value) return

  videoElement.value.addEventListener(
    "loadedmetadata",
    () => {
      if (!videoElement.value || typeof props.media.data.cover === 'object') return

      if (!props.media.data.cover) {
        videoElement.value.currentTime = props.media.data.coverTime
        videoMaxLength.value = videoElement.value.duration
      }
    },
    false,
  );
});

watch(() => isPlaying.value, (isPlaying) => {
  if (!videoElement.value || !props.playable) {
    return false
  }

  if (isPlaying) {
    videoElement.value.play()
  } else {
    videoElement.value.pause()
  }
})
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
