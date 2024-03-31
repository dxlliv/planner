<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel"

const props = defineProps<{
  media: IMediaAlbum
  profile: IUserProfile
  isFromDetail?: boolean
}>()

const albumEditing = ref(false)

watch(() => props.media.list, () => {
  let isSubMediaEditingInProgress = false

  for (const subMedia of props.media.list) {
    if (subMedia.isEditing) {
      //isSubMediaEditingInProgress = true
    }
  }

  albumEditing.value = isSubMediaEditingInProgress
}, {
  deep: true
})
</script>

<template>
  <InstagramMediaContainer type="album" :media="media">
    <Carousel
      :mouse-drag="!albumEditing"
      :touch-drag="!albumEditing"
      v-model="media.listIndex"
    >
      <Slide v-for="(item, i) of media.list" :key="i">
        <InstagramMedia
          :key="item.id"
          :context-menu="false"
          :media="item"
          :profile="profile"
        >
          <slot name="single-post" />
        </InstagramMedia>
      </Slide>
    </Carousel>

    <InstagramMediaAlbumCurrentIndex
      :index="media.currentIndex"
      :max="media.itemsCount"
    />

    <template v-slot:actions>

      <slot name="actions" />

    </template>

    <slot name="link" />

  </InstagramMediaContainer>
</template>

<style scoped lang="scss">
.ig-media--album {
  :deep(.ig-media__badge-index) {
    position: absolute;
    top: 21px;
    left: 24px;
  }
}
</style>
