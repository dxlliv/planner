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
  >
    <template v-slot:context-menu>
      <slot name="context-menu" />
    </template>
  </InstagramPostDetailDesktop>

  <InstagramPostDetailMobile v-else :media="media" :profile="profile">
    <template v-slot:context-menu>
      <slot name="context-menu" />
    </template>
  </InstagramPostDetailMobile>
</template>

<style scoped lang="scss"></style>
