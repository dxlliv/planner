<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"

const props = defineProps<{
  media: IMediaAlbum
  user: IUser
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

function onSlideChange(swiper) {
  props.media.listIndex = swiper.activeIndex
}
</script>

<template>
  <InstagramMediaContainer type="album" :media="media">

    <Swiper
      :initial-slide="media.listIndex"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="(item, i) of media.list" :key="i">
        <InstagramMedia
          :key="item.id"
          :context-menu="false"
          :media="item"
          :user="user"
        >
          <slot name="single-post" />
        </InstagramMedia>
      </SwiperSlide>
    </Swiper>

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
    z-index: 1;
  }

  :deep(.ig-media__type) {
    z-index: 1;
  }
}
</style>
