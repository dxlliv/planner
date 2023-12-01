<script setup lang="ts">
const props = defineProps<{
  user: IUser;
}>();
</script>

<template>
  <div class="ig-profile-page__header__inner">
    <InstagramUserProfileName
        :user="user"
    />

    <InstagramUserProfileBiography
      :biography="user.profile.biography"
      @update="(biography) => user.profile.updateBiography(biography)"
    />

    <InstagramUserProfileWebsite
        :user="user"
    />
  </div>

</template>

<style scoped lang="scss">
.ig-profile-page__header__inner {
  font-size: 14px;
  line-height: 18px;
}
</style>