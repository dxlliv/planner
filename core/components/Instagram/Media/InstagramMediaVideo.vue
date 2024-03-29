<script setup lang="ts">
const props = defineProps<{
  media: IMediaVideo
  isFromDetail?: boolean
  coverSelector?: boolean
  playable?: boolean
}>()

const isPlaying: Ref<boolean> = ref(false)

const src = await handleMediaForSrc(props.media)

const videoRef: Ref<HTMLVideoElement | null> = ref(null)
const videoMaxLength: Ref<number> = ref(0)

function onUpdateCoverTime(value: number) {
  if (!videoRef.value) return

  videoRef.value.currentTime = value

  // update media coverTime & save changes
  props.media.setCoverTime(value)
  props.media.save()
}

onMounted(() => {
  if (!videoRef.value) return

  videoRef.value.addEventListener(
    "loadedmetadata",
    () => {
      if (!videoRef.value || typeof props.media.cover === "object") return

      if (!props.media.cover) {
        videoRef.value.currentTime = props.media.coverTime
        videoMaxLength.value = videoRef.value.duration
      }
    },
    false,
  )
})

watch(
  () => isPlaying.value,
  (isPlaying) => {
    if (!videoRef.value || !props.playable) {
      return false
    }

    if (isPlaying) {
      videoRef.value.play()
    } else {
      videoRef.value.pause()
    }
  },
)
</script>

<template>
  <InstagramMediaContainer
    type="video"
    :media="media"
    :class="{ 'ig-media--reel': media.isReel }"
  >
    <template v-if="!media.cover || media.coverTime">
      <video
        ref="videoRef"
        :src="src"
        :autoplay="isPlaying"
        @click="isPlaying = !isPlaying"
      />

      <InstagramMediaVideoCoverSelector
        v-if="coverSelector"
        :media="media"
        :max-length="videoMaxLength"
        @updateCoverTime="onUpdateCoverTime"
      />
    </template>

    <template v-else-if="typeof media.cover === 'object'">
      <InstagramMediaImage :media="media.cover" @click="isPlaying = true" />
    </template>

    <InstagramMediaEditor v-if="media.isEditing" :media="media" />

  </InstagramMediaContainer>
</template>

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
    aspect-ratio: 9 / 16;
  }
}
</style>
