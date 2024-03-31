<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <InstagramUserProfileDesktop class="hidden-sm-and-down" :user="user" />
  <InstagramUserProfileMobile class="hidden-md-and-up" :user="user" />
</template>

<style scoped lang="scss"></style>
