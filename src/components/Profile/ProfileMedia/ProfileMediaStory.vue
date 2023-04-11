<template>
  <div class="ig-planner-profile__media__reel">
    <video ref="reel" :src="media.file.path" />
    <input ref="slider" v-model="mediaCover" type="range" class="ig-planner-profile__media__reel-slider" @change="updateMediaCover" />
    <div class="ig-planner-profile__media__reel-slider__value">
      {{ mediaCover / 10 }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  media: Object as () => IProfileMedia
})

const reel = ref(null)
const slider = ref(null)

const mediaCover = ref(props.media.cover)

onMounted(() => {
  reel.value.addEventListener(
    "loadedmetadata",
    function () {
      mediaCover.value = mediaCover.value * 10
      reel.value.currentTime = mediaCover.value / 10
      slider.value.max = reel.value.duration * 10
    },
    false
  )
})

function updateMediaCover() {
  reel.value.currentTime = mediaCover.value / 10
}
</script>

<style scoped lang="scss">
.instagram__media {
  border-top: 1px solid #dbdbdb;
  margin-top: 40px;
  padding-top: 20px;
  user-select: none;

  &__reel {
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
      .instagram__media__reel-slider {
        opacity: 1;

        &__value {
          opacity: 1;
        }
      }
    }
  }
}
</style>
