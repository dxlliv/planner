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
    <MediaAlbumCurrentIndex
      :index="media.currentIndex"
      :max="media.itemsCount"
    />
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

<style scoped lang="scss">
.ig-media--album {
  :deep(.ig-media__badge-index) {
    position: absolute;
    top: 21px;
    left: 24px;
  }
}
</style>