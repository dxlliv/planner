<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const users = useUserStore().users
</script>

<template>
  <div class="ig-user-selector-list">
    <Swiper
      :key="users.length"
      :slides-per-view="3.5"
    >
      <SwiperSlide v-for="(user, i) of users">
        <UserSelector
          v-if="user && user.ready"
          :user="user"
        />
      </SwiperSlide>
      <SwiperSlide>
        <UserSelectorAdd />
      </SwiperSlide>
    </Swiper>
  </div>
</template>