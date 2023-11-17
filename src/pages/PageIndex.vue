<template>
  <v-container class="text-center pt-16">
    <ProfileSwitcherCard
        v-for="(user, i) of users"
        :profile="user.profile"
        :key="i"
    />

    <v-divider class="mt-15 mb-10" />

    <MainIntro />
  </v-container>
</template>

<script setup lang="ts">
const users = Object.values(useConfigStore().users);
</script>

<style scoped lang="scss">
footer {
  user-select: none;
}
</style>
