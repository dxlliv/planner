<script setup lang="ts">
const props = defineProps<{
  user: IUser;
}>();
</script>

<template>
  <div class="ig-profile-page__header__inner">
    <UserProfileName
        :user="user"
    />

    <UserProfileBiography
      :biography="user.profile.biography"
      @update="(biography) => user.profile.updateBiography(biography)"
    />

    <UserProfileWebsite
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