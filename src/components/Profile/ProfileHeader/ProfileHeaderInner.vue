<script setup lang="ts">
const props = defineProps<{
  profile: IUserProfile;
}>();

const biography = computed(() => {
  return props.profile.biography?.replace(
      /(?:\r\n|\r|\n)/g,
      "<br>",
  )
})
</script>

<template>
  <div class="ig-profile-page__header__inner">
    <ProfileHeaderName
        :profile="profile"
    />

    <p
        class="ig-profile-page__header__biography"
        v-html="biography"
    />

    <ProfileHeaderWebsite
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