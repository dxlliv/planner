<script setup lang="ts">
defineProps<{user: IUser}>()
</script>

<template>
  <v-layout>
    <InstagramNavigationDrawer :user="user" />

    <v-main>
      <slot />

      <MainFooter class="mt-1" />
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss"></style>
