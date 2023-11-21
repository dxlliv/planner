<template>
  <v-row
      v-if="reels.length > 0"
      :no-gutters="$vuetify.display.xs"
  >
    <template v-for="(media, i) of reels" :key="i">
      <v-col :cols="4">
        <MediaReel :media="media" />
      </v-col>
    </template>
  </v-row>
</template>

<script setup lang="ts">
defineProps<{
  reels: MediaReel[];
}>();
</script>
