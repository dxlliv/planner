<script setup lang="ts">
const props = defineProps<{
  user: IUser
}>()
</script>

<template>
  <div class="dx-profile-page__header__inner">
    <InstagramUserProfileDisplayName :user="user" />

    <InstagramUserProfileDescription
      :user="user"
      @update="(biography) => user.profile.updateBiography(biography)"
    />

    <InstagramUserProfileWebsite :user="user" />
  </div>
</template>

<style scoped lang="scss">
.dx-profile-page__header__inner {

  @media(max-width: 959px) {

  }
}
</style>
