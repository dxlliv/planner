<script setup lang="ts">
defineProps<{
  user: IUser
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
    <li><b v-text="user.profile.posts_count" /> <span v-text="$t('instagram.profile.header.posts')" /></li>
    <li><b v-text="user.profile.followers_count" /> <span v-text="$t('instagram.profile.header.followers')" /></li>
    <li><b v-text="user.profile.follows_count" /> <span v-text="$t('instagram.profile.header.following')" /></li>
  </ul>
</template>

<style scoped lang="scss">
.ig-profile-page__header__stats {
  list-style-type: none;
  text-transform: lowercase;

  li {
    display: inline-block;
    margin-right: 40px;

    span {
      opacity: 0.7;
    }

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 640px) {
      margin-right: 24px;
    }
  }

  &--mobile {
    padding: 12px 0;
    text-align: center;
    width: 100%;

    li {
      width: 33.3%;
      margin: 0;
      font-size: 13px;

      b {
        display: block;
        font-size: 16px;
      }

      span {
        display: block;
        margin-top: -4px;
      }
    }
  }
}
</style>
