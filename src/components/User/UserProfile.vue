<script setup lang="ts">
defineProps<{
  profile: IUserProfile
}>();
</script>

<template>
  <UserProfileDesktop
      v-if="$vuetify.display.smAndUp"
      :profile="profile"
  />
  <UserProfileMobile
      v-else
      :profile="profile"
  />
</template>

<style scoped lang="scss">

</style>
