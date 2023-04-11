<template>
  <div class="ig-planner-profile__media">
    <v-container class="pt-1 px-0">
      <v-row>
        <template v-for="(media, i) of profile.media" :key="i">
          <v-col v-if="mode === 'posts' && media.type === 'image'" :cols="4">
            <ProfileMediaImage :media="media" />
          </v-col>

          <v-col v-if="mode === 'posts' && media.type === 'album'" :cols="4">
            <ProfileMediaAlbum :media="media" />
          </v-col>

          <v-col v-if="mode === 'posts' && media.type === 'video'" :cols="4">
            <ProfileMediaVideo :media="media" />
          </v-col>

          <v-col v-if="mode === 'reels' && media.type === 'reel'" :cols="4">
            <ProfileMediaStory :media="media" />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
defineProps({
  profile: Object as () => IProfile,
  mode: String
})
</script>

<style lang="scss">
.ig-planner-profile__media {
  user-select: none;

  &__post {
    position: relative;

    .ig-planner-profile__media__icon {
      position: absolute;
      top: 12px;
      right: 15px;
      color: white;
      font-size: 14px;
    }
  }
}
</style>