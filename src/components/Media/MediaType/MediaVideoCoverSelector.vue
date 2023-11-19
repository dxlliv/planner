<script setup lang="ts">
const emit = defineEmits(['updateCoverTime'])

const props = defineProps<{
  media: IMediaVideo;
}>()

const mediaCover: Ref<number> = ref(
    typeof props.media.data.cover === 'number' ? props.media.data.cover : 0
)

function updateMediaCover() {
  emit('updateCoverTime', Number(mediaCover.value))
}
</script>

<template>
  <input
      ref="sliderElement"
      v-model="mediaCover"
      type="range"
      class="ig-media--video-slider"
      @change="updateMediaCover"
  />
  <div class="ig-media--video-slider__value">
    {{ mediaCover }}
  </div>
</template>

<style scoped lang="scss">
.ig-media--video-slider {
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
</style>