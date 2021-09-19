<template>
  <div class="instagram__media">
    <v-container class="pt-1 px-0">
      <v-row>
        <template v-for="(m, i) of media" :key="i">
          <v-col v-if="mode === 'posts' && m.type === 'image'" cols="4">
            <InstagramProfileMediaImage :media="m" />
          </v-col>

          <v-col v-if="mode === 'posts' && m.type === 'album'" cols="4">
            <InstagramProfileMediaAlbum :media="m" />
          </v-col>

          <v-col v-if="mode === 'posts' && m.type === 'video'" cols="4">
            <InstagramProfileMediaVideo :media="m" />
          </v-col>

          <v-col v-if="mode === 'reels' && m.type === 'reel'" cols="4">
            <InstagramProfileMediaReel :media="m" />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, PropType} from "vue";
import InstagramProfileMediaImage from "./media/InstagramProfileMediaImage.vue";
import InstagramProfileMediaVideo from "./media/InstagramProfileMediaVideo.vue";
import InstagramProfileMediaAlbum from "./media/InstagramProfileMediaAlbum.vue";
import InstagramProfileMediaReel from "./media/InstagramProfileMediaReel.vue";

defineProps({
  media: Array,
  mode: String
})
</script>

<style lang="scss">
.instagram__media {
  user-select: none;

  &__post {
    position: relative;

    .instagram__media__icon {
      position: absolute;
      top: 12px;
      right: 15px;
      color: white;
      font-size: 14px;
    }
  }
}
</style>