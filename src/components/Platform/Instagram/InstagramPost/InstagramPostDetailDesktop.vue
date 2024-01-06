<script setup lang="ts">
defineProps<{
  media: IMedia;
  profile: IUserProfile;
}>()
</script>

<template>
  <v-card class="ig-media-detail">
    <v-row class="ma-0">
      <v-col class="pa-0" align-self="center">

        <div class="ig-media-detail__media">
          <InstagramPost
            :media="media"
            :profile="profile"
          />
        </div>

      </v-col>
      <v-col class="pa-0" style="max-width: 405px;">

        <div class="ig-media-detail__interaction">

          <InstagramUserHeader :profile="profile" />

          <InstagramPostComments>
            <InstagramPostComment
              v-if="media.caption"
              :profile="profile"
              :media="media"
            />
          </InstagramPostComments>

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
    aspect-ratio: 1 / 1;

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