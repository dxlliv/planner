<template>
  <div class="instagram-profile__media">
    <v-container class="pt-1 px-0">
      <v-row>
        <template v-for="(media, i) of profile.media" :key="i">
          <v-col v-if="mode === 'posts' && media.type === 'image'" :cols=4>
            <InstagramProfileMediaImage :media="media" />
          </v-col>

          <v-col v-if="mode === 'posts' && media.type === 'album'" :cols=4>
            <InstagramProfileMediaAlbum :media="media" />
          </v-col>

          <v-col v-if="mode === 'posts' && media.type === 'video'" :cols=4>
            <InstagramProfileMediaVideo :media="media" />
          </v-col>

          <v-col v-if="mode === 'reels' && media.type === 'reel'" :cols=4>
            <InstagramProfileMediaStory :media="media" />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import InstagramProfileMediaImage from "../ProfileMedia/ProfileMediaImage.vue";
import InstagramProfileMediaVideo from "../ProfileMedia/ProfileMediaVideo.vue";
import InstagramProfileMediaAlbum from "../ProfileMedia/ProfileMediaAlbum.vue";
import InstagramProfileMediaStory from "../ProfileMedia/ProfileMediaStory.vue";

defineProps({
  profile: Object as () => IProfile,
  mode: String
})
</script>

<style lang="scss">
.instagram-profile__media {
  user-select: none;

  &__post {
    position: relative;

    .instagram-profile__media__icon {
      position: absolute;
      top: 12px;
      right: 15px;
      color: white;
      font-size: 14px;
    }
  }
}
</style>