<template>
  <v-avatar class="ig-profile-avatar">
    <v-img width="150px" height="150px" :src="avatar.path" />
  </v-avatar>
</template>

<script setup lang="ts">
const { avatar } = defineProps<{
  avatar: IMediaFile;
}>();
</script>

<style scoped lang="scss">
.ig-profile-avatar {
  user-select: none;
  border: 1px solid var(--ig-border);
}
</style>
