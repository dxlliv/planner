<template>
  <div class="ig-planner-profile__header pb-10 mb-5">
    <v-row>
      <v-col cols="4" class="ig-planner-profile__header__avatar text-center">
        <v-avatar :size="150">
          <v-img :src="profile.fields.avatar" />
        </v-avatar>
      </v-col>

      <v-col cols="8">
        <div class="ig-planner-profile__header__username mb-4" v-text="profile.fields.username" />

        <ul class="ig-planner-profile__header__stats mb-5">
          <li>
            <b v-text="profile.media && profile.media.length" />
            posts
          </li>
          <li>
            <b v-text="profile.fields.followers_count" />
            followers
          </li>
          <li>
            <b v-text="profile.fields.follows_count" />
            following
          </li>
        </ul>

        <p class="ig-planner-profile__header__name" v-text="profile.fields.name" />
        <p class="ig-planner-profile__header__description" v-html="profile.fields.description" />

        <a
          v-if="profile.fields.website"
          class="ig-planner-profile__header__website"
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
.ig-planner-profile__header {
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
