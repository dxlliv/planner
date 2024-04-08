<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
</script>

<template>
  <Swiper class="ig-index" direction="vertical">
    <SwiperSlide>
      <AppIntroduction />
    </SwiperSlide>
    <SwiperSlide>
      <UserSelectorList />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
.ig-index {
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}

.swiper {
  width: 100%;
  max-height: 100vh;

  &-slide {
    display: grid;
    align-items: center;
    max-height: 100vh;
  }
}
</style>