<script setup lang="ts">
defineProps<{
  user: IUser;
}>();
</script>

<template>
  <a
      v-if="user.profile.website"
      class="ig-profile-page__header__website"
      :href="user.profile.website.href"
      target="_blank"
  >
    <v-icon icon="mdi-link-variant" :size="16" />
    {{user.profile.website.label}}
  </a>
</template>

<style scoped lang="scss">
.ig-profile-page__header__website {
  display: inline-block;
  font-weight: bold;
  line-height: 24px;
  text-decoration: none;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .v-icon {
    vertical-align: -1px;
  }
}
</style>