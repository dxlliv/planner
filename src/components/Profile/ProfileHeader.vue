<script setup lang="ts">
defineProps<{
  profile: IUserProfile
}>();
</script>

<template>
  <ProfileHeaderDesktop
      v-if="$vuetify.display.smAndUp"
      :profile="profile"
  />
  <ProfileHeaderMobile
      v-else
      :profile="profile"
  />
</template>

<style scoped lang="scss">

</style>
