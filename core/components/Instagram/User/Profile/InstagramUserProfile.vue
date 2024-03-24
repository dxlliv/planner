<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <InstagramUserProfileDesktop class="hidden-md-and-down" :user="user" />
  <InstagramUserProfileMobile class="hidden-sm-and-up" :user="user" />
</template>

<style scoped lang="scss"></style>
