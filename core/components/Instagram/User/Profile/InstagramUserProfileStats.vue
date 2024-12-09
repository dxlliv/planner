<script setup lang="ts">
defineProps<{
  user: IUser
  mobile?: boolean
}>()
</script>

<template>
  <ProfileStats
    :stats="[
      {
        count: user.profile.posts_count,
        text: $t('profile.header.posts')
      },
      {
        count: user.profile.followers_count,
        text: $t('profile.header.followers')
      },
      {
        count: user.profile.follows_count,
        text: $t('profile.header.following')
      },
    ]"
    :mobile="mobile"
  />
</template>