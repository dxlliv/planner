<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <PostDetailHeader class="dx-post-header">
    <template #avatar>
      <InstagramUserAvatar :avatar="user.profile.avatar" :size="40" />
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
.dx-post-header {

}
</style>
