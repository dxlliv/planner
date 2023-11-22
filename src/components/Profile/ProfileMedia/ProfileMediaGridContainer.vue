<template>
  <div class="ig-profile-page__media-grid">
    <v-container class="pt-1 px-0">
      <ProfileMediaGrid
          v-if="tab === 'posts' && user.media.posts.length > 0"
          :user="user"
          :mode="tab"
      />
      <ProfileMediaGrid
          v-if="tab === 'reels' && user.media.reels.length > 0"
          :user="user"
          :mode="tab"
      />
    </v-container>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  user: any;
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
