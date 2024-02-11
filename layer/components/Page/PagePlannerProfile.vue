<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <LayoutInstagram :user="user">
    <InstagramUser :user="user" />
  </LayoutInstagram>
</template>