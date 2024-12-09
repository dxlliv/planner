<script setup lang="ts">
const props = defineProps<{
  media: IMediaVideo
  isFromDetail?: boolean
  coverSelector?: boolean
  playable?: boolean
}>()

const isPlaying: Ref<boolean> = ref(false)
const src = ref(props.media.rawFilePath)

const videoRef: Ref<HTMLVideoElement | null> = ref(null)
const videoMaxLength: Ref<number> = ref(0)

async function onIntersect(isIntersecting) {
  if (isIntersecting) {
    if (props.media.from === 'client') {
      props.media.fetch()

      src.value = await handleMediaForSrc(props.media)
      //src.value = await handleMediaForSrc(props.media)
    }

    if (props.media.user.hasLocalChanges) {
      //src.value = await handleMediaForSrc(props.media)
    }
  }
}

function onUpdateCoverTime(value: number) {
  if (!videoRef.value) return

  videoRef.value.currentTime = value

  // update media coverTime & save changes
  props.media.setCoverTime(value)
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
    v-intersect="onIntersect"
  >
    <template v-if="(!media.cover || media.coverTime) || isPlaying">
      <MediaVideo
        ref="videoRef"
        :src="src"
        @playing="value => isPlaying = value"
      />

      <InstagramMediaVideoCoverSelector
        v-if="coverSelector"
        :media="media"
        :max-length="videoMaxLength"
        @updateCoverTime="onUpdateCoverTime"
      />
    </template>

    <template v-else-if="typeof media.cover === 'object'">
      <InstagramMediaImage
        :media="media.cover"
        @mouseover="isPlaying = true"
      />
    </template>

    <template v-slot:actions>

      <slot name="actions" />

    </template>

    <slot name="link" />

  </InstagramMediaContainer>
</template>

<style scoped lang="scss">
.dx-media {
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
      :deep(.dx-media--video-slider) {
        opacity: 1;
      }
      :deep(.dx-media--video-slider__value) {
        opacity: 1;
      }
    }
  }
}
</style>
