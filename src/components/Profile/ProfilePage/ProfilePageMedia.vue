<template>
  <div class="igp-profile-page__media">
    <v-container class="pt-1 px-0">
      <v-row v-if="mode === 'posts' && profile.media.posts.length > 0">
        <template v-for="(media, i) of profile.media.posts" :key="i">
          <v-col v-if="media.type === 'image'" :cols="4">
            <ProfileMediaImage :media="media" />
          </v-col>

          <v-col v-if="media.type === 'album'" :cols="4">
            <ProfileMediaAlbum :media="media" />
          </v-col>

          <v-col v-if="media.type === 'video'" :cols="4">
            <ProfileMediaVideo :media="media" />
          </v-col>

          <v-col v-if="media.type === 'reel'" :cols="4">
            <ProfileMediaStory :media="media" />
          </v-col>
        </template>
      </v-row>
      <v-row v-if="mode === 'reels' && profile.media.reels.length > 0">
        <template v-for="(media, i) of profile.media.reels" :key="i">
          <ProfileMediaStory :media="media" />
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
.igp-profile-media {
  position: relative;

  &__icon {
    position: absolute;
    top: 12px;
    right: 15px;
    color: white;
    font-size: 14px;
  }
}
</style>
