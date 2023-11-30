<script setup lang="ts">
defineProps<{
  user: IUser
}>();
</script>

<template>
  <p
      v-if="user.profile.name"
      class="ig-profile-page__header__name"
      v-text="user.profile.name"
  />
</template>

<style scoped lang="scss">
.ig-profile-page__header__name {
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  word-wrap: break-word;
}
</style>