<template>
  <div class="instagram__media">
    <v-container class="pt-1 px-0">
      <v-row>
        <v-col
            v-for="(m, i) of media" cols="4" :key="i"
        >

          <v-img
              v-if="m.type === 'image'"
              :src="m.path"
          />

          <InstagramProfileMediaVideo
            v-if="m.type === 'video'"
            :media="m"
          />

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, PropType} from "vue";
import InstagramProfileMediaVideo from "./InstagramProfileMediaVideo.vue";

defineProps({
  media: Array
})
</script>