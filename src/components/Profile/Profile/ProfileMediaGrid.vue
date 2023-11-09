<template>
  <div class="ig-profile-page__media-grid">
    <v-container class="pt-1 px-0">
      <v-row
          v-if="tab === 'posts' && profile.media.posts.length > 0"
          :no-gutters="$vuetify.display.xs"
      >
        <template v-for="(media, i) of profile.media.posts" :key="i">
          <v-col :cols="4">
            <ProfileMedia :media="media" />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
defineProps<{
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
</style>
