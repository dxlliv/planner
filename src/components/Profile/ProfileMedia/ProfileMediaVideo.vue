<template>
  <div class="ig-profile-media ig-profile-media--video">
    <video ref="video" :src="media.file.path" />
    <input ref="slider" v-model="mediaCover" type="range" class="ig-profile-media--video-slider" @change="updateMediaCover" />
    <div class="ig-profile-media--video-slider__value">
      {{ mediaCover / 10 }}
    </div>

    <div class="ig-profile-media__icon">
      <v-icon>mdi-play</v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  media: IProfileMedia
}>()

const video = ref(null)
const slider = ref(null)

const mediaCover = ref(props.media.cover)

onMounted(() => {
  video.value.addEventListener(
    "loadedmetadata",
    function () {
      mediaCover.value = mediaCover.value * 10
      video.value.currentTime = mediaCover.value / 10
      slider.value.max = video.value.duration * 10
    },
    false
  )
})

function updateMediaCover() {
  video.value.currentTime = mediaCover.value / 10
}
</script>

<style scoped lang="scss">
.instagram__media {
  border-top: 1px solid #dbdbdb;
  margin-top: 40px;
  padding-top: 20px;
  user-select: none;

  &__video {
    position: relative;

    video {
      max-width: 100%;
    }

    &-slider {
      position: absolute;
      bottom: 20px;
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
      .instagram__media__video-slider {
        opacity: 1;

        &__value {
          opacity: 1;
        }
      }
    }
  }
}
</style>
