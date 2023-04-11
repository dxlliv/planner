<template>
  <div class="igp-profile-page__header pb-10 mb-5">
    <v-row>
      <v-col cols="4" class="igp-profile-page__header__avatar text-center">
        <ProfileAvatar :size="150" :src="profile?.avatar?.path" />
      </v-col>

      <v-col cols="8">
        <div class="igp-profile-page__header__username mb-5" v-text="profile.fields.username" />

        <ul class="igp-profile-page__header__stats mb-5">
          <li>
            <b v-text="profile?.media.posts.length" />
            posts
          </li>
          <li>
            <b v-text="profile?.fields.followers_count" />
            followers
          </li>
          <li>
            <b v-text="profile?.fields.follows_count" />
            following
          </li>
        </ul>

        <p class="igp-profile-page__header__name" v-text="profile?.fields.name" />
        <p class="igp-profile-page__header__biography" v-html="profile?.fields.biography" />

        <a
          v-if="profile?.fields.website"
          class="igp-profile-page__header__website"
          :href="profile.fields.website"
          target="_blank"
          v-text="profile.fields.website.replace('http://', '').replace('https://', '')"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
defineProps({
  profile: Object as () => IProfile
})
</script>

<style scoped lang="scss">
.igp-profile-page__header {
  text-align: left;
  min-height: 210px;
  border-bottom: 1px solid var(--igp-border);

  &__avatar {
    user-select: none;

    .v-avatar {
      border: 1px solid var(--igp-border);
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
