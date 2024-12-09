<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <a
    v-if="user.profile.website"
    class="dx-profile-page__header__website"
    :href="user.profile.website.href"
    target="_blank"
  >
    <v-icon icon="mdi-link-variant" :size="20" />
    {{ user.profile.website.label }}
  </a>
</template>

<style scoped lang="scss">
.dx-profile-page__header__website {
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--v-theme-primary);

  .v-icon {
    vertical-align: -1px;
  }

  @media(max-width: 959px) {
    font-weight: initial;

    .v-icon {
      vertical-align: -3px;
    }
  }
}
</style>
