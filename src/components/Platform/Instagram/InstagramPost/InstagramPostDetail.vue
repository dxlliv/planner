<script setup lang="ts">
defineProps<{
  media: IMedia
  profile: IUserProfile
}>()
</script>

<template>
  <InstagramPostDetailDesktop
    v-if="$vuetify.display.smAndUp"
    :media="media"
    :profile="profile"
  />
  <InstagramPostDetailMobile v-else :media="media" :profile="profile" />
</template>

<style scoped lang="scss"></style>
