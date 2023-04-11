<template>
  <div class="igp-profile-media igp-profile-media--album">
    <Carousel>
      <Slide v-for="(media, i) of media.album" :key="i">
        <ProfileMediaImage :media="media" />
      </Slide>
    </Carousel>

    <div class="igp-profile-media__icon">
      <v-icon>mdi-folder-multiple-image</v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide } from "vue3-carousel"

defineProps({
  media: Object as () => IProfileMedia
})
</script>
