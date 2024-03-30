<script setup lang="ts">
const props = defineProps<{
  media: IMedia
  profile: IUserProfile
}>()

function onDateUpdate(value) {
  props.media.setDate(value)
}
</script>

<template>
  <v-card class="ig-media-detail ig-media-detail--desktop" flat>
    <v-row class="ma-0">
      <v-col
        :class="[
          'pa-0 ig-media-detail__media',
          { 'ig-media-detail__media--reel': media.collection === 'reels' },
        ]"
        align-self="center"
      >
        <InstagramMedia
          :media="media"
          :profile="profile"
          is-from-detail
        />
      </v-col>
      <v-col class="pa-0">
        <div class="ig-media-detail__interaction">

          <InstagramPostHeader :profile="profile">

            <v-btn icon>
              <v-icon icon="mdi-dots-vertical" />
              <InstagramMediaContextMenu
                activator="parent"
                :media="media"
                :width="240"
                :offset="[8, 0]"
                location="bottom right"
              />
            </v-btn>

          </InstagramPostHeader>

          <InstagramPostCommentList>
            <InstagramPostComment
              v-if="media.caption"
              :profile="profile"
              :media="media"
            />
          </InstagramPostCommentList>

          <InstagramPostFooter>

            <template v-slot:date>
              <InstagramPostDate
                :date="media.date"
                @update="onDateUpdate"
              />
            </template>

            <template v-slot:prepend>
              <InstagramPostDateHeader />
            </template>

            <template v-slot:append>
              <v-divider class="ma-0" />
            </template>

          </InstagramPostFooter>

          <InstagramPostCommentInput
            :media="media"
          />

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
