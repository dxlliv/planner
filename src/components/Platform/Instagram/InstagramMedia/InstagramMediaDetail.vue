<script setup lang="ts">
defineProps<{
  media: IMedia;
}>()
</script>

<template>
  <v-card class="ig-media-detail">
    <v-row class="ma-0">
      <v-col class="ig-media-detail__media flex-grow-0 pa-0">

        <InstagramMediaPost :media="media" />

      </v-col>
      <v-col class="flex-grow-1">

      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss">
.ig-media-detail {
  &__media {
    background: black;
    min-height: calc(100vh - 50px);
    aspect-ratio: 1080 / 1920;
  }
}
</style>