<script setup lang="ts">
const props = defineProps<{
  media: IMediaImage
  isFromDetail?: boolean
}>()

const src = ref(props.media.rawFilePath)

async function onIntersect(isIntersecting) {
  if (isIntersecting) {
    src.value = await handleMediaForSrc(props.media)
  }
}
</script>

<template>
  <InstagramMediaContainer
    type="image"
    :media="media"
    v-intersect="onIntersect"
  >

    <MediaImage :src="src" />

    <template v-slot:actions>
      <slot name="actions" />
    </template>

    <slot name="link" />

  </InstagramMediaContainer>
</template>
