<script setup lang="ts">
const props = defineProps<{
  media: IMedia
  user: IUser
}>()

function onCaptionUpdate(caption: string) {
  props.media.setCaption(caption)
}
</script>

<template>
  <v-sheet class="ig-user-comment fill-height">
    <div class="px-4 py-3">
      <v-row>
        <v-col class="flex-grow-0">
          <InstagramUserAvatar
            :avatar="user.profile.avatar"
            :size="32"
          />
        </v-col>
        <v-col class="flex-grow-1 pl-1" align-self="center">
          <InstagramUserProfileUsername
            size="medium"
            class="d-inline mr-1"
            :user="user" link
          />

          <InstagramPostCaptionInlineEditing
            :caption="media.caption"
            @update="onCaptionUpdate"
          />
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<style scoped lang="scss">
.ig-user-comment {
  line-height: 18px !important;
}
</style>
