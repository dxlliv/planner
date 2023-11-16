<template>
  <MediaPostContainer type="album" class="ig-profile-media--album">
    <Carousel>
      <Slide v-for="(item, i) of media.list" :key="i">
        <MediaPost :media="item" />
      </Slide>
    </Carousel>
  </MediaPostContainer>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";

defineProps<{
  media: IMediaAlbum;
}>();
</script>