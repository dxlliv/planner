<script setup lang="ts">
defineProps<{
  media: IMedia
  profile: IUserProfile
}>()
</script>

<template>
  <v-card class="ig-media-detail ig-media-detail--desktop">
    <v-row class="ma-0">
      <v-col
        :class="[
          'pa-0 ig-media-detail__media',
          { 'ig-media-detail__media--reel': media.collection === 'reels' },
        ]"
        align-self="center"
      >
        <InstagramMedia :media="media" :profile="profile" />
      </v-col>
      <v-col class="pa-0">
        <div class="ig-media-detail__interaction">
          <InstagramPostHeader :profile="profile" />

          <InstagramPostComments>
            <InstagramPostComment
              v-if="media.caption"
              :profile="profile"
              :media="media"
            />
          </InstagramPostComments>

          <InstagramPostDate :date="media.date">
            <template v-slot:prepend>
              <InstagramPostDateHeader />
            </template>
            <template v-slot:append>
              <v-divider class="ma-0" />
            </template>
          </InstagramPostDate>

          <InstagramPostCommentInput />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss">
.ig-media-detail {
  border-radius: 4px !important;
  min-height: 450px;

  &__media {
    //aspect-ratio: 1 / 1;

    &--reel {
      max-width: 50vh;
      //aspect-ratio: 9 / 16;
    }

    :deep(.ig-media) {
      width: 100%;
      height: 100%;
      max-width: inherit;
    }
  }

  &__interaction {
    display: grid;
    min-height: 100%;
    grid-auto-rows: 56px auto 109px 56px;
  }
}
</style>
