<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <ProfileHeaderLayoutDesktop>

    <template #avatar>
      <InstagramUserProfileAvatarEditor
        :user="user"
      />
    </template>

    <template #username>
      <InstagramUserProfileUsername
        editable
        :user="user"
        size="large"
      />
    </template>

    <template #stats>
      <InstagramUserProfileStats
        :user="user"
      />
    </template>

    <template #description>
      <InstagramUserProfileInner
        :user="user"
      />
    </template>

  </ProfileHeaderLayoutDesktop>
</template>