<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const userSelectorStore = useUserSelectorStore();

/*
import { SlickList, SlickItem } from "vue-slicksort";
const listOfUsernames = ref(userSelectorStore.listOfUsernames);

function onListUpdated(platformUsersReordered: string[]) {
  userSelectorStore.setUsersSelectorOrder(platformUsersReordered);
}
*/

const listOfUsers = computed(() => userSelectorStore.listOfUsers);

</script>

<template>
  <div class="ig-user-selector-list">
    <Swiper
      :key="listOfUsers.length"
      :slides-per-view="3.5"
    >
      <SwiperSlide
        v-for="(user, i) of listOfUsers"
      >
        <UserSelector
          v-if="user && user.ready"
          :user="user"
        />
      </SwiperSlide>
      <SwiperSlide>
        <UserSelectorAdd />
      </SwiperSlide>
    </Swiper>
    <!--
      <SlickItem
        class="v-col flex-grow-0"
        v-for="(user, i) of listOfUsers"
        :key="user.id" :index="i"
      >
        <UserSelector
          v-if="user && user.ready"
          :user="user"
        />
      </SlickItem>

      <div class="v-col flex-grow-0">
        <UserSelectorAdd />
      </div>
    </SlickList>
    -->
  </div>
</template>

<style scoped lang="scss">
.ig-user-selector-list {
  .swiper {
  }
}
</style>