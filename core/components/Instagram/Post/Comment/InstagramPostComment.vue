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
  <PostComment>

    <template #avatar>
      <InstagramUserAvatar
        :avatar="user.profile.avatar"
        :size="32"
      />
    </template>

    <template #username>
      <InstagramUserProfileUsername
        class="d-inline mr-2"
        :user="user" link
      />
    </template>

    <InstagramPostCaptionInlineEditing
      :caption="media.caption"
      @update="onCaptionUpdate"
    />

  </PostComment>
</template>

<style scoped lang="scss">

</style>
