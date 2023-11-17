<template>
  <v-row
      v-if="posts.length > 0"
      :no-gutters="$vuetify.display.xs"
  >
    <template v-for="(media, i) of posts" :key="i">
      <v-col :cols="4">
        <MediaPost :media="media" />
      </v-col>
    </template>
  </v-row>
</template>

<script setup lang="ts">
defineProps<{
  posts: IMediaPost[];
}>();
</script>
