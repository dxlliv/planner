<script setup lang="ts">
defineProps<{
  profile: IProfile;
}>();
</script>

<template>
  <div class="ig-profile-page__header__inner">
    <ProfileHeaderName :profile="profile" />
    <p
        class="ig-profile-page__header__biography"
        v-html="profile.biography"
    />

    <ProfileHeaderWebsite :profile="profile" />
  </div>

</template>

<style scoped lang="scss">
.ig-profile-page__header__inner {
  font-size: 15px;
}
</style>