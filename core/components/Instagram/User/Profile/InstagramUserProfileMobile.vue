<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <div class="ig-profile-page__header px-2 px-sm-0">
    <div class="ig-profile-page__header__top py-4">
      <router-link to="/">
        <v-icon icon="mdi-arrow-left" class="mr-4" style="margin-top: -2px" />
      </router-link>
      <InstagramUserProfileUsername
        editable
        :profile="user.profile"
        size="large"
        class="mb-5"
      />
    </div>

    <div class="mb-8">
      <v-row>
        <v-col cols="3" class="ig-profile-page__header__avatar text-left">
          <InstagramUserProfileAvatarEditor :size="72" :user="user" />
        </v-col>
        <v-col cols="9" align-self="center">
          <InstagramUserProfileStats mobile :profile="user.profile" />
        </v-col>
      </v-row>
    </div>

    <div class="my-4 mt-n6">
      <InstagramUserProfileInner :user="user" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.ig-profile-page__header {
  text-align: left;
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  .ig-profile__header__username {
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
