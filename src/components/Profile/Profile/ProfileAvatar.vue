<template>
  <v-avatar class="ig-profile-avatar">
    <v-img :src="avatar.path" />
  </v-avatar>
</template>

<script setup lang="ts">
const {avatar} = defineProps<{
  avatar: IProfileMediaFile
}>()
</script>

<style scoped lang="scss"></style>
