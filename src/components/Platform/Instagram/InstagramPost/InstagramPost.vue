<script setup lang="ts">
defineProps<{
  profile: IUserProfile;
  media: IMedia;
  collection?: IMediaCollection;
  contextMenu?: boolean
  detailOnClick?: boolean
}>()
</script>

<template>
  <div class="ig-post-container">

    <InstagramMedia
      v-bind="$props"
    />

    <v-dialog v-if="detailOnClick" activator="parent">
      <InstagramPostDetail
        :media="media"
        :profile="profile"
      />
    </v-dialog>

  </div>
</template>

<style scoped lang="scss">
.v-dialog {
  max-width: calc(100% - 64px - 64px);
  max-height: 913px;
}

.ig-post-container {
  width: 100%;
}
</style>