<script setup lang="ts">
const props = defineProps<{
  media: IMediaImage
  isFromDetail?: boolean
}>()

const src = ref(props.media.rawFilePath)

async function onIntersect(isIntersecting) {
  if (isIntersecting) {
    if (props.media.from === 'client') {
      src.value = await handleMediaForSrc(props.media)
    }
  }
}
</script>

<template>
  <InstagramMediaContainer
    type="image"
    :media="media"
    v-intersect="onIntersect"
  >

    <v-img cover height="100%" :src="src" />

    <client-only>
      <MediaActionEdit
        v-if="isPlannerFeatureEnabled('mediaEditor')"
        @click.stop="media.setEditing(true)"
      />

      <MediaImageEditor v-if="media.isEditing" :media="media" />
    </client-only>

  </InstagramMediaContainer>
</template>
