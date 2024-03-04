<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
</script>

<template>
  <AppBackground />

  <Swiper direction="vertical">
    <SwiperSlide>
      <MainIntro />
    </SwiperSlide>
    <SwiperSlide>
      <UserSelectorList />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
.ig-index {
  display: grid;
  height: 100%;
  max-width: 960px;
}

.ig-user-selector-list {
  max-width: 100vw;
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