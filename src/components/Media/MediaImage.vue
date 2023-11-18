<template>
  <MediaContainer type="image">
    <v-img cover height="100%" :src="media.file.path" />
  </MediaContainer>
</template>

<script setup lang="ts">
defineProps<{
  media: IMediaImage;
}>();
</script>
