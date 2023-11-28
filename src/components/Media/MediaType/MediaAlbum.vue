<template>
  <MediaContainer
      type="album"
      :media="media"
      @click="nextSlide"
  >
    <Carousel
        :model-value="slideIndex"
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
  media: IMediaAlbum;
}>();

const slideIndex = ref(0)

function nextSlide() {
  if (!props.media.data.list) return

  if (slideIndex.value === (props.media.data.list.length - 1)) {
    slideIndex.value = 0
  } else {
    slideIndex.value++
  }

  props.media.setListIndex(slideIndex.value)
}
</script>