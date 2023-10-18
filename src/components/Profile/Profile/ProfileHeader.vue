<template>
  <div class="ig-profile-page__header pb-10 mb-5">
    <v-row>
      <v-col cols="4" class="ig-profile-page__header__avatar text-center">
        <ProfileAvatar :size="150" :avatar="profile?.avatar" />
      </v-col>

      <v-col cols="8">
        <div
            class="ig-profile-page__header__username mb-5"
            v-text="profile.username"
        />

        <ul class="ig-profile-page__header__stats mb-5">
          <li>
            <b v-text="profile?.posts_count" />
            posts
          </li>
          <li>
            <b v-text="profile?.followers_count" />
            followers
          </li>
          <li>
            <b v-text="profile?.follows_count" />
            following
          </li>
        </ul>

        <p class="ig-profile-page__header__name" v-text="profile.name" />
        <p class="ig-profile-page__header__biography" v-html="profile.biography" />

        <a
          v-if="profile.website"
          class="ig-profile-page__header__website"
          :href="profile.website.href"
          target="_blank"
          v-text="profile.website.label"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const {profile} = defineProps<{
  profile: IUserProfile
}>()
</script>

<style scoped lang="scss">
.ig-profile-page__header {
  text-align: left;
  min-height: 210px;
  border-bottom: 1px solid var(--ig-border);

  &__avatar {
    user-select: none;

    .v-avatar {
      border: 1px solid var(--ig-border);
    }
  }

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
    display: block;
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

.instagram__tab {
  ul {
    list-style-type: none;
  }
}
</style>
