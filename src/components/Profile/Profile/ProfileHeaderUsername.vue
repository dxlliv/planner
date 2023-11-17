<script setup lang="ts">
defineProps<{
  profile: IProfile
}>();
</script>

<template>
  <div
      class="ig-profile-page__header__username"
      v-text="profile.username"
  />
</template>

<style scoped lang="scss">
.ig-profile-page__header__username {
  font-weight: 300;
  font-size: 28px;
  line-height: 32px;
}
</style>