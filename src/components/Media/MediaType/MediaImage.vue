<template>
  <MediaContainer type="image">
    <v-img cover height="100%" :src="src" />
  </MediaContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  media: MediaPost;
}>();

const src = await handleMediaForSrc(props.media)
</script>
