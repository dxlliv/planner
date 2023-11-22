<template>
  <div class="ig-profile-page__media-grid">
    <v-container class="pt-1 px-0">
      <ProfileMediaGridPosts
          v-if="tab === 'posts' && media.posts.length > 0"
          :posts="media.posts"
      />
      <ProfileMediaGridReels
          v-if="tab === 'reels' && media.reels.length > 0"
          :reels="media.reels"
      />
    </v-container>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  media: IUserMedia;
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
