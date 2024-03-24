<script setup lang="ts">
defineProps<{user: IUser}>()
</script>

<template>
  <v-layout>
    <InstagramNavigationDrawer :user="user" />

    <div id="drawer-editor" />

    <v-main>
      <slot />

      <MainFooter class="hidden-sm-and-down mt-1" />
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss"></style>
