<template>
  <v-container class="text-left">
    <v-row no-gutters>
      <v-col v-for="(user, p) of users" :key="p" class="text-center">
        <Profile :profile="user.profile" />
      </v-col>
    </v-row>

    <v-divider class="mt-15 mb-10" />

    <MainIntro />
  </v-container>
</template>

<script setup lang="ts">
const users = Object.values(useConfigStore().users)
</script>

<style scoped lang="scss">
footer {
  user-select: none;
}
</style>
