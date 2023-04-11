<template>
  <v-avatar class="igp-profile-avatar">
    <v-img :src="avatar.path" />
  </v-avatar>
</template>

<script setup lang="ts">
defineProps({
  avatar: Object as () => IProfileMediaFile
})
</script>

<style scoped lang="scss"></style>
