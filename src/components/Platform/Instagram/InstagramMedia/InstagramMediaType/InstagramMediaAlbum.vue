<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";

const props = defineProps<{
  media: IMediaAlbum;
  profile: IUserProfile;
}>();
</script>

<template>
  <InstagramMediaContainer
      type="album"
      :media="media"
  >
    <Carousel
        v-model="media.listIndex"
    >
      <Slide v-for="(item, i) of media.list" :key="i">
        <InstagramPost
          :context-menu="false"
          :media="item"
          :profile="profile"
        />
      </Slide>
    </Carousel>
    <InstagramMediaAlbumCurrentIndex
      :index="media.currentIndex"
      :max="media.itemsCount"
    />
  </InstagramMediaContainer>
</template>

<style scoped lang="scss">
.ig-media--album {
  :deep(.ig-media__badge-index) {
    position: absolute;
    top: 21px;
    left: 24px;
  }
}
</style>