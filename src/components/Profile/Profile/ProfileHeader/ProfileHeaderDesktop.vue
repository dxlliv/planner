<script setup lang="ts">
defineProps<{
  profile: IProfile;
}>();
</script>

<template>
  <div class="ig-profile-page__header py-12">
    <v-row>
      <v-col cols="4" class="ig-profile-page__header__avatar text-center">
        <ProfileAvatar :size="150" :avatar="profile?.avatar" />
      </v-col>

      <v-col cols="8">
        <ProfileHeaderUsername :profile="profile" class="mb-5" />
        <ProfileHeaderStats :profile="profile" class="mb-5" />
        <ProfileHeaderInner :profile="profile" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.ig-profile-page__header {
  text-align: left;
  border-bottom: 1px solid var(--ig-border);

  :deep(.ig-profile-page__header__username) {
    display: block;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
  }

  &__biography {
    font-size: 16px;
    line-height: 24px;
    word-wrap: break-word;
  }
}
</style>
