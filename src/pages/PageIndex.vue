<template>
  <v-container class="text-center pt-16">

    <template v-for="(user, i) of users" :key="i">
      <ProfileSelector
          :profile="user.profile"
      />
    </template>

    <v-divider class="mt-15 mb-10" />

    <MainIntro />
  </v-container>
</template>

<script setup lang="ts">
const userStore = useUserStore()

const users = computed(() => Object.values(userStore.users));
</script>

<style scoped lang="scss">
footer {
  user-select: none;
}
</style>
