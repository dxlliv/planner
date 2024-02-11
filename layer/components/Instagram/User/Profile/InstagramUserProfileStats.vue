<script setup lang="ts">
defineProps<{
  profile: IUserProfile
  mobile?: boolean
}>()
</script>

<template>
  <ul
    :class="[
      'ig-profile-page__header__stats',
      { 'ig-profile-page__header__stats--mobile': mobile },
    ]"
  >
    <li><b v-text="profile.posts_count" /> <span v-text="$t('instagram.profile.header.posts')" /></li>
    <li><b v-text="profile.followers_count" /> <span v-text="$t('instagram.profile.header.followers')" /></li>
    <li><b v-text="profile.follows_count" /> <span v-text="$t('instagram.profile.header.following')" /></li>
  </ul>
</template>

<style scoped lang="scss">
.ig-profile-page__header__stats {
  list-style-type: none;

  li {
    display: inline-block;
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 640px) {
      margin-right: 24px;
      font-size: 16px;
    }
  }

  &--mobile {
    padding: 12px 0;
    font-size: 14px;
    text-align: center;
    width: 100%;

    li {
      width: 33.3%;
      margin: 0;

      b {
        display: block;
      }

      span {
        display: block;
        margin-top: -1px;
        font-size: 12px;

        &:first-letter {
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
