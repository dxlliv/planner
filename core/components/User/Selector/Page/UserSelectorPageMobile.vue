<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
</script>

<template>
  <Swiper class="dx-index" direction="vertical">
    <SwiperSlide>
      <UserSelectorList />
    </SwiperSlide>
    <SwiperSlide>
      <AppIntroduction />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
.dx-index {
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}

.swiper {
  width: 100%;
  max-height: 100dvh;

  &-slide {
    display: grid;
    align-items: center;
    max-height: 100dvh;
  }
}
</style>