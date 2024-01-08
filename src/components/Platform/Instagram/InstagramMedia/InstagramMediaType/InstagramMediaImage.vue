<template>
  <InstagramMediaContainer type="image" :media="media">
    <v-img cover height="100%" :src="src" />
  </InstagramMediaContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  media: IMediaImage
}>()

const src = await handleMediaForSrc(props.media)
</script>
