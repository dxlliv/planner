<template>
  <MediaPostContainer type="video" class="ig-profile-media--video">

    <template v-if="!media.cover || typeof media.cover === 'number'">
      <video ref="videoElement" :src="media.file.path" />

      <input
        ref="sliderElement"
        v-model="mediaCover"
        type="range"
        class="ig-profile-media--video-slider"
        @change="updateMediaCover"
      />
      <div class="ig-profile-media--video-slider__value">
        {{ mediaCover / 10 }}
      </div>
    </template>

    <template v-else-if="typeof media.cover === 'object'">
      <MediaImage :media="media.cover" />
    </template>

  </MediaPostContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  media: IMediaVideo;
}>();

const videoElement: Ref<HTMLElement> = ref(null);
const sliderElement: Ref<any> = ref({});

const mediaCover = ref(props.media.cover ? props.media.cover : 0);

onMounted(() => {
  if (!videoElement.value) return

  videoElement.value.addEventListener(
    "loadedmetadata",
    () => {
      mediaCover.value = Number(mediaCover.value) * 10;
      videoElement.value.currentTime = mediaCover.value / 10;
      sliderElement.value.max = videoElement.value.duration * 10;
    },
    false,
  );
});

function updateMediaCover() {
  videoElement.value.currentTime = Number(mediaCover.value) / 10;
}
</script>

<style scoped lang="scss">
.ig-profile-media {
  &--video {
    position: relative;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-slider {
      position: absolute;
      bottom: 15px;
      left: 15px;
      right: 15px;
      width: calc(100% - 30px);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;

      &__value {
        position: absolute;
        top: 11px;
        left: 11px;
        padding: 0 5px;
        background: #3a3a3a;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        font-size: 15px;
        opacity: 0;
        cursor: default;
        transition: opacity 0.2s ease-in-out;
      }
    }

    &:hover {
      .ig-profile-media--video-slider {
        opacity: 1;

        &__value {
          opacity: 1;
        }
      }
    }
  }
}
</style>
