<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"

const users = useUserStore().userList
</script>

<template>
  <div class="ig-user-selector-list">
    <Swiper
      :key="users.length"
      :slides-per-view="1.5"
      :breakpoints="{
        550: {
          slidesPerView: 3.5,
        },
        700: {
          slidesPerView: 4.5,
        },
        960: {
          slidesPerView: 3.5,
        },
      }"
    >
      <SwiperSlide v-for="(user, i) of users">
        <UserSelector v-if="user && user.ready" :user="user" />
      </SwiperSlide>
      <SwiperSlide>
        <UserSelectorAdd />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.ig-user-selector-list {
  max-width: calc(100vw - 48px);
}
</style>
