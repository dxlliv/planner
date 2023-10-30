<script setup lang="ts">
defineProps<{
  profile: IProfile;
}>();
</script>

<template>
  <div class="ig-profile-page__header pt-1 mb-5">
    <v-row>
      <v-col cols="3" class="ig-profile-page__header__avatar text-left">
        <ProfileAvatar :size="120" :avatar="profile?.avatar" />
      </v-col>
      <v-col cols="9" />
    </v-row>

    <div class="mt-5">
      <p class="ig-profile-page__header__name" v-text="profile.name" />
      <p
          class="ig-profile-page__header__biography"
          v-html="profile.biography"
      />

      <a
          v-if="profile.website"
          class="ig-profile-page__header__website"
          :href="profile.website.href"
          target="_blank"
          v-text="profile.website.label"
      />
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
  min-height: 210px;
  border-bottom: 1px solid var(--ig-border);

  &__username {
    font-weight: 300;
    font-size: 28px;
    line-height: 32px;
  }

  &__stats {
    list-style-type: none;

    li {
      display: inline-block;
      margin-right: 40px;
    }
  }

  &__name {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    word-wrap: break-word;
  }

  &__biography {
    font-size: 16px;
    line-height: 24px;
    word-wrap: break-word;
  }

  &__website {
    display: inline-block;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #00376b;
  }
}
</style>
