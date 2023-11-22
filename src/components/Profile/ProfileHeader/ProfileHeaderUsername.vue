<script setup lang="ts">
defineProps<{
  profile: IUserProfile
}>();
</script>

<template>
  <div class="ig-profile-page__header__username">
    <span v-text="profile.username" />
    <v-icon v-if="profile.verified" icon="mdi-check-decagram" />
  </div>
</template>

<style scoped lang="scss">
.v-icon {
  font-size: 16px;
  color: rgb(0, 149, 246);
  margin-left: 3px;
  vertical-align: 0;
}
</style>