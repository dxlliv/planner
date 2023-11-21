<template>
  <div class="ig-profile-page__media-grid">
    <v-container class="pt-1 px-0">
      <ProfileMediaGridPosts
          v-if="tab === 'posts' && profile.media.posts.length > 0"
          :posts="profile.media.posts"
      />
      <ProfileMediaGridReels
          v-if="tab === 'reels' && profile.media.reels.length > 0"
          :reels="profile.media.reels"
      />
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
.ig-profile-page__media-grid > .v-container > .v-row {
  margin: -1.5px !important;

  @media(max-width: 600px) {
    margin: -1px !important;
  }

  & > .v-col {
    padding: 1.5px !important;

    @media(max-width: 600px) {
      padding: 1px !important;
    }
  }
}
</style>
