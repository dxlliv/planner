<template>
  <v-container class="text-center pt-16">

    <div class="d-inline-flex text-center">
      <SlickList
          class="v-row"
          v-model:list="listOfUsernames"
          @update:list="onListUpdated"
          axis="x"
      >
        <SlickItem
            class="v-col flex-grow-0"
            v-for="(user, i) of listOfUsers"
            :key="user.profile.username" :index="i"
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
    </div>

    <v-divider class="mt-15 mb-10" />

    <MainIntro />
    <MainFooter />
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
footer {
  user-select: none;
}
</style>
