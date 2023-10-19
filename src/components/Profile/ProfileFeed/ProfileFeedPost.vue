<template>
  <div class="ig-profile-feed-post">
    <ProfileFeedPostHeader :profile="profile" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  profile: IProfile;
}>();
</script>

<style scoped lang="scss"></style>
