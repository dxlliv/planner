<script setup lang="ts">
const props = defineProps<{
  username: string
  platform: string
}>()

const userStore = useUserStore()
const user = ref()

onMounted(() => {
  setTimeout(() => {
    user.value = userStore.getUser(props.username, props.platform)

    if (user) {
      user.value.media.fetch()
    }
  }, 100)
})
</script>

<template>
  <LayoutInstagram v-if="user" :user="user">
    <InstagramUser :user="user" />
  </LayoutInstagram>
</template>