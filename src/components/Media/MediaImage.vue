<template>
  <MediaContainer type="image">
    <v-img cover height="100%" :src="media.data?.file.path" />
  </MediaContainer>
</template>

<script setup lang="ts">
defineProps<{
  media: MediaPost;
}>();
</script>
