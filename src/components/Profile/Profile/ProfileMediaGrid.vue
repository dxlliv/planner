<template>
  <div class="ig-profile-page__media-grid">
    <v-container class="pt-1 px-0">
      <v-row
          v-if="tab === 'posts' && profile.media.posts.length > 0"
          :no-gutters="$vuetify.display.xs"
      >
        <template v-for="(media, i) of profile.media.posts" :key="i">
          <v-col v-if="media.type === 'image'" :cols="4">
            <ProfileMediaImage :media="media" />
          </v-col>

          <v-col v-if="media.type === 'video'" :cols="4">
            <ProfileMediaVideo :media="media" />
          </v-col>

          <v-col v-if="media.type === 'iframe'" :cols="4">
            <ProfileMediaIframe :media="media" />
          </v-col>

          <v-col v-if="media.type === 'album'" :cols="4">
            <ProfileMediaAlbum :media="media" />
          </v-col>
        </template>
      </v-row>
      <v-row v-if="props.tab === 'reels' && profile.media.reels.length > 0">
        <template v-for="(media, i) of profile.media.reels" :key="i">
          <ProfileMediaVideo reel :media="media" />
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  profile: IProfile;
  tab: string;
}>();
</script>

<style lang="scss">
.ig-profile-page__media-grid > .v-container > .v-row > .v-col {
  > .ig-profile-media {
    margin: 1px !important;
  }
}
.ig-profile-media {
  position: relative;
  height: 100%;

  &__icon {
    position: absolute;
    top: 12px;
    right: 15px;
    color: white;
    font-size: 14px;

    .mdi-play {
      font-size: 28px;
      margin-top: -3px;
      margin-right: -8px;
    }
  }
}
</style>
