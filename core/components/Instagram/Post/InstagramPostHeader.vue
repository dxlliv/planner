<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <PostDetailHeader class="ig-post-header">
    <template #avatar>
      <InstagramUserAvatar :avatar="user.profile.avatar" :size="32" />
    </template>
    <template #username>
      <InstagramUserProfileUsername
        size="medium"
        :user="user" link
      />
    </template>
  </PostDetailHeader>
</template>

<style scoped lang="scss">
.ig-post-header {

}
</style>
