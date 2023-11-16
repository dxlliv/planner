<template>
  <ProfileMediaContainer type="album" class="ig-profile-media--album">
    <Carousel>
      <Slide v-for="(item, i) of media.list" :key="i">
        <ProfileMedia :media="item" />
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