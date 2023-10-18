<template>
  <div class="ig-profile-media ig-profile-media--album">
    <Carousel>
      <Slide v-for="(item, i) of media.list" :key="i">
        <ProfileMediaImage :media="item" />
      </Slide>
    </Carousel>

    <div class="ig-profile-media__icon">
      <v-icon>mdi-folder-multiple-image</v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel"

defineProps<{
  media: IProfileMedia
}>()
</script>
