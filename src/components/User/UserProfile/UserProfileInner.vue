<script setup lang="ts">
const props = defineProps<{
  profile: IUserProfile;
}>();
</script>

<template>
  <div class="ig-profile-page__header__inner">
    <UserProfileName
        :profile="profile"
    />

    <UserProfileBiography
      :biography="profile.biography"
      @update="(biography) => profile.updateBiography(biography)"
    />

    <UserProfileWebsite
        :profile="profile"
    />
  </div>

</template>

<style scoped lang="scss">
.ig-profile-page__header__inner {
  font-size: 14px;
  line-height: 18px;
}
</style>