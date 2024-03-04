<script setup lang="ts">
defineProps<{user: IUser}>()
</script>

<template>
  <v-layout>
    <InstagramNavigationDrawer :user="user" />

    <div id="drawer-editor" />

    <v-main>
      <slot />

      <MainFooter v-if="$vuetify.display.smAndUp" class="mt-1" />
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss"></style>
