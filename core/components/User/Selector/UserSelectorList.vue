<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"

const users = computed(() => useUserStore().userList)
</script>

<template>
  <div class="ig-user-selector-list">
    <Swiper
      :key="users.length"
      :slides-per-view="1.75"
      :breakpoints="{
        340: {
          slidesPerView: 2.5,
        },
        470: {
          slidesPerView: 3.5,
        },
        600: {
          slidesPerView: 4.5,
        },
        960: {
          slidesPerView: 3.5,
        },
      }"
    >
      <SwiperSlide v-for="(user, i) of users">
        <UserSelector :user="user" />
      </SwiperSlide>
      <SwiperSlide>
        <UserSelectorAdd />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.ig-user-selector-list {
  max-width: 100vw;
  height: 100dvh;

  .swiper {
    display: grid;
    align-content: center;
    height: 100dvh;
  }
}
</style>
