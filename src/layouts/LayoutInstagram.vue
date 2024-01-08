<script setup lang="ts"></script>

<template>
  <v-layout>
    <InstagramNavigationDrawer />

    <v-main>
      <slot />

      <MainFooter class="mt-1" />
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss"></style>
