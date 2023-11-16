<template>
  <MediaPostContainer class="ig-media--image">
    <v-img :src="media.file.path" />
  </MediaPostContainer>
</template>

<script setup lang="ts">
defineProps<{
  media: IMediaImage;
}>();
</script>
