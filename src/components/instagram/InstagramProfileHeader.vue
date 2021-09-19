<template>
  <div class="instagram__header pb-10 mb-5">
    <v-row>
      <v-col cols="4" class="instagram__header__avatar text-center">
        <v-avatar :size="150">
          <v-img :src="profile.avatar" />
        </v-avatar>
      </v-col>

      <v-col cols="8">
        <div
            class="instagram__header__username mb-4"
           v-text="profile.username"
        />

        <ul class="instagram__header__stats mb-5">
          <li>
            <b v-text="profile.stats.posts.total" /> posts
          </li>
          <li>
            <b v-text="profile.stats.followers" /> followers
          </li>
          <li>
            <b v-text="profile.stats.following" /> following
          </li>
        </ul>

        <p
            class="instagram__header__name"
            v-text="profile.name"
        />
        <p
            class="instagram__header__description"
            v-html="profile.description"
        />

        <a
            v-if="profile.website"
            class="instagram__header__website"
            v-text="profile.website"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import {computed, PropType} from "vue";
import {IProfile} from "~/../types";

const props = defineProps({
  profile: {
    type: Object as PropType<IProfile>,
    default: {
      name: "",
      username: "username",
      description: "",
      website: "",
      stats: {
        posts: 0,
        followers: 0,
        following: 0
      }
    }
  }
})
</script>

<style scoped lang="scss">
.instagram__header {
  text-align: left;
  border-bottom: 1px solid #dbdbdb;

  &__avatar {
    user-select: none;
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

  &__description {
    font-size: 16px;
    line-height: 24px;
    word-wrap: break-word;
  }

  &__website {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    word-wrap: break-word;
    color: #00376b;
  }
}

.instagram__tab {
  ul {
    list-style-type: none;
  }
}
</style>