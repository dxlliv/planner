<script setup lang="ts">
import { SlickList, SlickItem } from 'vue-slicksort';
const userSelectorStore = useUserSelectorStore()

const listOfUsernames = ref(userSelectorStore.listOfUsernames);
const listOfUsers = computed(() => userSelectorStore.listOfUsers);

function onListUpdated(platformUsersReordered: string[]) {
  userSelectorStore.setUsersSelectorOrder(platformUsersReordered)
}
</script>

<template>
  <div class="ig-user-selector-list">
    <div class="ig-user-selector-list__inner">
      <SlickList
        class="v-row"
        v-model:list="listOfUsernames"
        @update:list="onListUpdated"
        axis="x"
        :press-delay="200"
      >
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.ig-user-selector-list {
  display: inline-block;
  max-width: 100%;

  &__inner {
    width: max-content;
    overflow: hidden;
  }
}
</style>