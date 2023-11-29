<script setup lang="ts">
defineProps<{
  profile: IUserProfile
}>();
</script>

<template>
  <p
      v-if="profile.name"
      class="ig-profile-page__header__name"
      v-text="profile.name"
  />
</template>

<style scoped lang="scss">
.ig-profile-page__header__name {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  word-wrap: break-word;
}
</style>