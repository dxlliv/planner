<script setup lang="ts">
const props = defineProps<{
  username: string
  platform: string
  collection: IMediaCollection
  media: string
}>()

const userStore = useUserStore()
const user = ref()

user.value = userStore.getUser(props.username, props.platform)

const media = user.value.media.fetchSingleMedia(props.collection, props.media)

useSeoMeta(media.seoMeta)
</script>

<template>
  <LayoutInstagram v-if="user" :user="user">
    <InstagramPostDetailDesktop
      class="mt-10" border
      :profile="user.profile"
      :media="media"
    />
  </LayoutInstagram>
</template>