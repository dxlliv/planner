<template>
  <div class="igp-profile-feed-post">
    <ProfileFeedPostHeader :profile="profile" />
  </div>
</template>

<script setup lang="ts">
defineProps({
    profile: Object as () => IProfile
})
</script>

<style scoped lang="scss">

</style>