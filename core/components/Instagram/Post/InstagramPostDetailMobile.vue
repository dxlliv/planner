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
  <v-card class="dx-media-detail">

    <InstagramPostHeader :user="user">
      <v-btn icon flat>
        <v-icon icon="mdi-dots-vertical" size="20" class="mr-n3"/>
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

    <InstagramMedia
      :media="media"
      :user="user"
      is-from-detail
    />

    <div class="dx-media-detail__interaction">
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

    </div>
  </v-card>
</template>

<style scoped lang="scss">
.dx-media-detail {
  border-radius: 4px !important;

  :deep(.dx-media) {
    width: 100%;
    height: 100%;
  }
}
</style>
