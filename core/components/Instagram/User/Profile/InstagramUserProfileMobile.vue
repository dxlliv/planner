<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <div class="ig-profile-page__header px-2 px-sm-0">
    <div class="ig-profile-page__header__top py-4">
      <router-link to="/" class="hidden-xs">
        <v-icon icon="mdi-arrow-left" class="mr-4" style="margin-top: -2px" />
      </router-link>

      <InstagramUserProfileUsername
        editable
        :user="user"
        size="large"
        class="mb-5"
      />

      <v-icon icon="mdi-chevron-down" class="mt-n1" :size="21" />
    </div>

    <div class="mb-5 pa-sm-2">
      <v-row>
        <v-col cols="3" class="ig-profile-page__header__avatar text-left">
          <InstagramUserProfileAvatarEditor :size="72" :user="user" />
        </v-col>
        <v-col cols="9" align-self="center">
          <InstagramUserProfileStats mobile :user="user" />
        </v-col>
      </v-row>
    </div>

    <div class="my-4 mt-n6 pa-sm-2">
      <InstagramUserProfileInner :user="user" />
    </div>

    <InstagramUserProfileMobileActions class="mb-5" />
  </div>
</template>

<style scoped lang="scss">
.ig-profile-page__header {
  text-align: left;

  @media(min-width: 960px) {
    border-bottom: var(--plx-border);
  }

  .ig-profile__header__username {
    display: inline;
    font-weight: 600;
    font-size: 20px;
  }

  &__biography {
    word-wrap: break-word;
  }
}
</style>
