<template>
  <MediaContainer
      type="album"
      @click="nextSlide"
  >
    <Carousel
        :model-value="slideIndex"
        :class="{'no-pointer-events': !slideable}"
    >
      <Slide v-for="(item, i) of media.data.list" :key="i">
        <MediaPost :media="item" />
      </Slide>
    </Carousel>
  </MediaContainer>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";

const props = defineProps<{
  media: MediaPost;
  slideable?: boolean
}>();

const slideIndex = ref(0)

function nextSlide() {
  if (slideIndex.value === (props.media.data.list.length - 1)) {
    slideIndex.value = 0
  } else {
    slideIndex.value++
  }
}
</script>