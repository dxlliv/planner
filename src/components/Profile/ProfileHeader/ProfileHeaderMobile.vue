<script setup lang="ts">
defineProps<{
  profile: IUserProfile;
}>();
</script>

<template>
  <div class="ig-profile-page__header">
    <div
        class="ig-profile-page__header__top py-4"
    >
      <v-icon icon="mdi-arrow-left" class="mr-4" style="margin-top: -2px;" />
      <ProfileHeaderUsername :profile="profile" class="mb-5" />
    </div>

    <v-divider class="mx-n4" />

    <div class="my-8">
      <v-row>
        <v-col cols="3" class="ig-profile-page__header__avatar text-left">
          <ProfileAvatar :size="120" :avatar="profile?.avatar" />
        </v-col>
        <v-col cols="9" />
      </v-row>
    </div>

    <div class="my-4 mt-n6">
      <ProfileHeaderInner :profile="profile" />
    </div>

    <ProfileHeaderStats
        mobile
        :profile="profile"
    />

  </div>
</template>

<style scoped lang="scss">
.ig-profile-page__header {
  text-align: left;
  border-bottom: 1px solid var(--ig-border);

  &__username {
    display: inline;
    font-weight: 800;
  }

  &__biography {
    font-size: 16px;
    line-height: 24px;
    word-wrap: break-word;
  }
}
</style>
