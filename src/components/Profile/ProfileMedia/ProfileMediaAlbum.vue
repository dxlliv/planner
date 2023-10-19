<template>
  <div class="ig-profile-media ig-profile-media--album">
    <Carousel>
      <Slide v-for="(item, i) of media.list" :key="i">
        <ProfileMediaImage v-if="item.type === 'image'" :media="item" />
        <ProfileMediaVideo v-if="item.type === 'video'" :media="item" />
        <ProfileMediaIframe v-if="item.type === 'iframe'" :media="item" />
      </Slide>
    </Carousel>

    <div class="ig-profile-media__icon">
      <v-icon>mdi-folder-multiple-image</v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";

defineProps<{
  media: IProfileMediaAlbum;
}>();
</script>
