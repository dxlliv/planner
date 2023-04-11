<template>
  <v-container class="text-left">
    <v-row no-gutters>
      <v-col v-for="(profile, p) of profiles" :key="p" class="text-center">
        <Profile :profile="profile" />
      </v-col>
    </v-row>

    <v-divider class="mt-15 mb-10" />

    <MainIntro />
  </v-container>
</template>

<script setup lang="ts">
const profiles = computed(() => Object.values(useConfigStore().profiles))
</script>

<style scoped lang="scss">
footer {
  user-select: none;
}
</style>
