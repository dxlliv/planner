<script setup lang="ts">
defineProps<{
  src?: string
  cover?: string
}>()

const emit = defineEmits(["playing"])

const isPlaying: Ref<boolean> = ref(false)
const videoRef: Ref<HTMLVideoElement | null> = ref(null)

watch(() => isPlaying.value, value => {
  emit("playing", value)

  if (!videoRef.value) {
    return false
  }

  if (value) {
    videoRef.value.play()
  } else {
    videoRef.value.pause()
  }
})
</script>

<template>
  <template v-if="!cover || isPlaying">

    <video
      ref="videoRef"
      :src="src"
      autoplay
      @click="isPlaying = !isPlaying"
      @mouseover="isPlaying = true"
      @mouseleave="isPlaying = false"
    />

    <slot />

  </template>
  <template v-else>

    <MediaImage
      :src="cover"
      @mouseover="isPlaying = true"
    />

  </template>
</template>

<style scoped lang="scss">
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: top;
  aspect-ratio: 1;
}
</style>
