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

    <v-img cover height="100%" :src="src" />

    <template v-slot:actions>

      <client-only>
        <MediaActionEdit
          v-if="isPlannerFeatureEnabled('mediaEditor')"
          @click.stop="media.setEditing(true)"
        />

        <MediaImageEditor v-if="media.isEditing" :media="media" />
      </client-only>

      <slot name="actions" />

    </template>

    <slot name="link" />

  </InstagramMediaContainer>
</template>
