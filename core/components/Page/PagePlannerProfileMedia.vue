<script setup lang="ts">
const props = defineProps<{
  username: string
  platform: string
  collection: IMediaCollection
  media: string
}>()

const route = useRoute()

const user: User = route.meta.user
const media: Media = route.meta.media

useSeoMeta(media.seoMeta)
</script>

<template>
  <LayoutInstagram :user="user">
    <InstagramPostDetailDesktop
      class="mt-10" border
      :profile="user.profile"
      :media="media"
    />
  </LayoutInstagram>
</template>