<script setup lang="ts">
const props = defineProps<{
  username: string
  platform: string
}>()

const userStore = useUserStore()
const user = ref()

user.value = userStore.getUser(props.username, props.platform)

if (user) {
  user.value.media.fetch()
}

onMounted(async () => {
  await user.value.prepareClient()
})
</script>

<template>
  <LayoutInstagram v-if="user" :user="user">
    <InstagramUser :user="user" />
  </LayoutInstagram>
</template>