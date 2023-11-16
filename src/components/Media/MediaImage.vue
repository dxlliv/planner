<template>
  <MediaContainer type="image">
    <v-img :src="media.file.path" />
  </MediaContainer>
</template>

<script setup lang="ts">
defineProps<{
  media: IMediaImage;
}>();
</script>
