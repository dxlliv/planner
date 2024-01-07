<script setup lang="ts">
defineProps<{
  media: IMedia;
  profile: IUserProfile;
}>()
</script>

<template>
  <v-card class="ig-media-detail">
    <InstagramUserHeader :profile="profile" />

    <InstagramMedia
      :media="media"
      :profile="profile"
    />

    <div class="ig-media-detail__interaction">
      <InstagramPostDate
        :date="media.date"
      >
        <template v-slot:prepend>
          <InstagramPostDateHeader />
        </template>
        <template v-slot:append>
          <v-divider class="ma-0"/>
        </template>
      </InstagramPostDate>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
.ig-media-detail {
  border-radius: 4px !important;

  :deep(.ig-media) {
    width: 100%;
    height: 100%;
    max-width: inherit;
  }
}
</style>