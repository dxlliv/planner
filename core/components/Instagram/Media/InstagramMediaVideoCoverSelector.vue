<script setup lang="ts">
const emit = defineEmits(["updateCoverTime"])

const props = defineProps<{
  media: IMediaVideo
  maxLength: number
}>()

const mediaCover: Ref<number> = ref(
  typeof props.media.coverTime === "number" ? props.media.coverTime : 0,
)

function updateMediaCover() {
  emit("updateCoverTime", mediaCover.value)
}
</script>

<template>
  <v-slider
    v-if="props.maxLength > 0"
    v-model="mediaCover"
    color="white"
    :max="maxLength"
    class="dx-media--video-slider"
    @end="updateMediaCover"
    thumb-label="always"
  />
</template>

<style scoped lang="scss">
.dx-media--video-slider {
  position: absolute;
  bottom: -17px;
  left: 36px;
  width: calc(100% - 64px);
  opacity: 0;
  transition: opacity 0.2s ease-in;
  transition-delay: 1s;

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
    transition: opacity 0.2s ease-in;
    transition-delay: 1s;
  }
}
</style>
