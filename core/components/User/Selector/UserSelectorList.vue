<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { Mousewheel } from "swiper/modules"

const users = computed(() => useUserStore().userList)
</script>

<template>
  <div
    class="dx-user-selector-list"
  >
    <Swiper
      :key="users.length"
      :modules="[Mousewheel]"
      mousewheel allow-touch-move
      :centered-slides="$vuetify.display.smAndDown"
      :slides-per-view="1.5"
      :breakpoints="{
        340: {
          slidesPerView: users.length > 2 ? 2.5 : users.length + 1,
        },
        470: {
          slidesPerView: users.length > 3 ? 3.5 : users.length + 2,
        },
        600: {
          slidesPerView: users.length > 4 ? 4.5 : users.length + 2,
        },
        960: {
          slidesPerView: 2.5,
        },
        1280: {
          slidesPerView: users.length > 4 ? 3 : users.length + 1,
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
.dx-user-selector-list {
  max-width: 100vw;

  .swiper {
    display: grid;
    align-content: center;
  }
}
</style>
