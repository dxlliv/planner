<script setup lang="ts">
defineProps<{
  user: IUser
}>();
</script>

<template>
  <InstagramUserProfileDesktop
      v-if="$vuetify.display.smAndUp"
      :user="user"
  />
  <InstagramUserProfileMobile
      v-else
      :user="user"
  />
</template>

<style scoped lang="scss">

</style>
