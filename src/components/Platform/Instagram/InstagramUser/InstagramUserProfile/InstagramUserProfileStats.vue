<script setup lang="ts">
defineProps<{
  user: IUser
  mobile?: boolean
}>();

</script>

<template>
  <ul
      :class="['ig-profile-page__header__stats', {'ig-profile-page__header__stats--mobile': mobile}]"
  >
    <li>
      <b v-text="user.profile.posts_count" /> <span>posts</span>
    </li>
    <li>
      <b v-text="user.profile.followers_count" /> <span>followers</span>
    </li>
    <li>
      <b v-text="user.profile.follows_count" /> <span>following</span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.ig-profile-page__header__stats {
  list-style-type: none;

  li {
    display: inline-block;
    margin-right: 40px;
  }

  &--mobile {
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
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

      span:first-letter {
        text-transform: uppercase;
      }
    }
  }
}
</style>
