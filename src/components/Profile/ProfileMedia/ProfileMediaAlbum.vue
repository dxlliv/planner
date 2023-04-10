<template>
  <div class="ig-planner-profile__media__post instagram__media__album">

    <Carousel>
      <Slide v-for="(media, i) of media.list" :key="i">
        <InstagramProfileMediaImage :media="media" />
      </Slide>
    </Carousel>

    <div class="ig-planner-profile__media__icon">
      <v-icon>mdi-folder-multiple-image</v-icon>
    </div>

  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import InstagramProfileMediaImage from "./ProfileMediaImage.vue";

defineProps({
  media: Object as () => IProfileMedia
})
</script>