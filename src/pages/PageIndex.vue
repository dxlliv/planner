<template>
  <v-container class="ig-index text-center py-16 align-content-center">

    <div>
      <div class="d-inline-flex text-center">
        <SlickList
            class="v-row"
            v-model:list="listOfUsernames"
            @update:list="onListUpdated"
            axis="x"
            :press-delay="100"
        >
          <SlickItem
              class="v-col flex-grow-0"
              v-for="(user, i) of listOfUsers"
              :key="user.username" :index="i"
          >
            <UserSelector
                v-if="user && user.ready"
                :user="user"
            />
          </SlickItem>

          <div class="v-col flex-grow-0 hidden-sm-and-down">
            <UserSelectorAdd />
          </div>
        </SlickList>
      </div>

      <v-divider class="mt-15 mb-10" />

      <MainIntro />
      <MainFooter class="pb-0" />
    </div>

  </v-container>
</template>

<script setup lang="ts">
import { SlickList, SlickItem } from 'vue-slicksort';
const userSelectorStore = useUserSelectorStore()

const listOfUsernames = ref(userSelectorStore.listOfUsernames);
const listOfUsers = computed(() => userSelectorStore.listOfUsers);

function onListUpdated(usernames: string[]) {
  userSelectorStore.setUsersOrder(usernames)
}
</script>

<style scoped lang="scss">
.ig-index {
  display: grid;
  height: 100%;
}
</style>
