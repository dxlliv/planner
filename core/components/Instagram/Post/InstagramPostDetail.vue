<script setup lang="ts">
defineProps<{
  media: IMedia
  user: IUser
}>()
</script>

<template>
  <InstagramPostDetailDesktop
    v-if="$vuetify.display.smAndUp"
    :media="media"
    :user="user"
  />

  <InstagramPostDetailMobile
    v-else
    :media="media"
    :user="user"
  />
</template>

<style scoped lang="scss"></style>
