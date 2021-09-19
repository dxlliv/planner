<template>
  <div class="instagram__media__post instagram__media__album">

    <Carousel>
      <Slide v-for="(image, i) of props.media.list" :key="i">
        <v-img :src="image" />
      </Slide>
    </Carousel>

    <div class="instagram__media__icon">
      <v-icon>mdi-folder-multiple-image</v-icon>
    </div>

  </div>
</template>

<script setup lang="ts">
import {defineProps, onMounted} from "vue";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

const props = defineProps({
  media: Object
})
</script>