<script setup lang="ts">
defineProps<{
  media: IMedia
  profile: IUserProfile
}>()
</script>

<template>
  <v-card class="ig-media-detail">
    <InstagramPostHeader :profile="profile">
      <slot name="context-menu" />
    </InstagramPostHeader>

    <InstagramMedia
      :media="media"
      :profile="profile"
      is-from-detail
    />

    <div class="ig-media-detail__interaction">
      <InstagramPostFooter>
        <template v-slot:date>
          <slot name="date" />
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
    max-width: inherit;
  }
}
</style>
