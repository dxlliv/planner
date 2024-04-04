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
  <v-card class="ig-media-detail">

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

    <InstagramMedia
      :media="media"
      :profile="profile"
      is-from-detail
    />

    <div class="ig-media-detail__interaction">
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

    </div>
  </v-card>
</template>

<style scoped lang="scss">
.ig-media-detail {
  border-radius: 4px !important;

  :deep(.ig-media) {
    width: 100%;
    height: 100%;
  }
}
</style>
