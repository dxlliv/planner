<script setup lang="ts">
const emit = defineEmits(['updateCoverTime'])

const props = defineProps<{
  media: IMediaVideo
  maxLength: number
}>()

const mediaCover: Ref<number> = ref(
    typeof props.media.data.coverTime === 'number' ? props.media.data.coverTime*10 : 0
)

function updateMediaCover() {
  emit('updateCoverTime', mediaCover.value/10)
}
</script>

<template>
  <input
      v-if="props.maxLength > 0"
      ref="sliderElement"
      v-model="mediaCover"
      :max="maxLength*10"
      type="range"
      class="ig-media--video-slider"
      @change="updateMediaCover"
  />
  <div class="ig-media--video-slider__value">
    {{ mediaCover/10 }}s
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