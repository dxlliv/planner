<template>
  <MediaContainer
      type="album"
      :media="media"
      @click="nextSlide"
  >
    <Carousel
        v-model="media.listIndex"
    >
      <Slide v-for="(item, i) of media.list" :key="i">
        <MediaPost :context-menu="false" :media="item" />
      </Slide>
    </Carousel>
  </MediaContainer>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";

const props = defineProps<{
  media: IMediaAlbum;
}>();

function nextSlide() {
  props.media.slideToNextListItem()
}
</script>