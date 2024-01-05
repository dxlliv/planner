<template>
  <InstagramMediaContainer
      type="album"
      :media="media"
  >
    <Carousel
        v-model="media.listIndex"
    >
      <Slide v-for="(item, i) of media.list" :key="i">
        <InstagramMediaPost :context-menu="false" :media="item" />
      </Slide>
    </Carousel>
    <InstagramMediaAlbumCurrentIndex
      :index="media.currentIndex"
      :max="media.itemsCount"
    />
  </InstagramMediaContainer>
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