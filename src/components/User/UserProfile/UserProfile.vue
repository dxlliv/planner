<script setup lang="ts">
defineProps<{
  user: IUser
}>();
</script>

<template>
  <UserProfileDesktop
      v-if="$vuetify.display.smAndUp"
      :user="user"
  />
  <UserProfileMobile
      v-else
      :user="user"
  />
</template>

<style scoped lang="scss">

</style>
