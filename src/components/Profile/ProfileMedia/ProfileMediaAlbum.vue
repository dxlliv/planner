<template>
  <ProfileMediaContainer type="album" class="ig-profile-media--album">
    <Carousel>
      <Slide v-for="(media, i) of media.list" :key="i">
        <ProfileMedia :media="media" />
      </Slide>
    </Carousel>
  </ProfileMediaContainer>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";

defineProps<{
  media: IProfileMediaAlbum;
}>();
</script>