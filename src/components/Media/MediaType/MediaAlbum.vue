<template>
  <MediaContainer type="album">
    <Carousel>
      <Slide v-for="(item, i) of media.list" :key="i">
        <MediaPost :media="item" />
      </Slide>
    </Carousel>
  </MediaContainer>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";

defineProps<{
  media: MediaPost;
}>();
</script>