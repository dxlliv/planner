<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <div class="ig-profile-page__header py-10">
    <v-row>
      <v-col
        cols="4" align-self="center"
        class="ig-profile-page__header__avatar text-center"
      >
        <InstagramUserProfileAvatarEditor :user="user" />
      </v-col>

      <v-col cols="8">
        <InstagramUserProfileUsername
          editable
          :user="user"
          size="large"
          class="mb-6"
        />
        <InstagramUserProfileStats :user="user" class="mb-4" />
        <InstagramUserProfileInner :user="user" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.ig-profile-page__header {
  text-align: left;
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  :deep(.ig-profile__header__username) {
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
