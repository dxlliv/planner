<script setup lang="ts">
const props = defineProps<{
  media: IMedia
  user: IUser
}>()

function onDateUpdate(value) {
  props.media.setDate(value)
}
</script>

<template>
  <v-card class="ig-media-detail ig-media-detail--desktop" flat>
    <v-row class="ma-0">
      <v-col
        :cols="6"
        :class="[
          'pa-0 ig-media-detail__media',
          { 'ig-media-detail__media--reel': media.collection === 'reels' },
        ]"
        align-self="center"
      >
        <InstagramMedia
          :media="media"
          :user="user.profile"
          is-from-detail
        />
      </v-col>
      <v-col :cols="6" class="pa-0">
        <div class="ig-media-detail__interaction">

          <InstagramPostHeader :user="user">

            <v-btn icon rounded flat>
              <v-icon icon="mdi-dots-vertical" />
              <InstagramMediaMenuContext
                activator="parent"
                :width="240"
                :offset="[8, 0]"
                location="bottom right"
              >
                <InstagramMediaMenu
                  :media="media"
                />
              </InstagramMediaMenuContext>
            </v-btn>

          </InstagramPostHeader>

          <InstagramPostCommentList>
            <InstagramPostComment
              v-if="media.caption"
              :user="user"
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
              <InstagramPostDateHeader :media="media" />
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
      aspect-ratio: 9 / 16;
    }

    :deep(.ig-media) {
      width: 100%;
      height: 100%;
    }
  }

  &__interaction {
    display: grid;
    min-height: calc(100% - 2px);
    grid-auto-rows: 64px auto 118px 56px;
  }
}
</style>
