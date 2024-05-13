<script setup lang="ts">
const props = defineProps<{
  user: IUser
}>()
</script>

<template>
  <div class="ig-profile-page__header__inner">
    <InstagramUserProfileName :user="user" />

    <InstagramUserProfileBiography
      :user="user"
      @update="(biography) => user.profile.updateBiography(biography)"
    />

    <InstagramUserProfileWebsite :user="user" />
  </div>
</template>

<style scoped lang="scss">
.ig-profile-page__header__inner {
  font-size: 14px;
  line-height: 16px;

  @media(max-width: 959px) {
    font-size: 13px;
  }
}
</style>
