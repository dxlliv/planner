<script setup lang="ts">
const props = defineProps<{
  media: IMediaImage
  isFromDetail?: boolean
}>()

const src = await handleMediaForSrc(props.media)
</script>

<template>
  <InstagramMediaContainer type="image" :media="media">
    <v-img cover height="100%" :src="src" />

    <InstagramMediaActionEdit
      @click.stop="media.setEditing(true)"
    />

    <InstagramMediaEditor v-if="media.isEditing" :media="media" />
  </InstagramMediaContainer>
</template>
