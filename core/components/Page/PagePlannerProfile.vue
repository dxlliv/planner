<script setup lang="ts">
const props = defineProps<{
  username: string
  platform: string
}>()

const {t} = useI18n()
const userStore = useUserStore()
const user = ref()

user.value = userStore.getUser(props.username, props.platform)

if (user) {
  user.value.media.fetch()
}

onBeforeMount(async () => {
  await user.value.prepareClient()
})

useServerSeoMeta({
  title: t('pages.userSelect.meta.title')
})

const route = useRoute()

let platform = ''

if (route.params.platform) {
  platform = capitalizeFirstLetter(route.params.platform)
}

useSeoMeta({
  title: `${props.username} - ${platform} Planner`
})
</script>

<template>
  <LayoutInstagram v-if="user" :user="user">
    <InstagramUser :user="user" />
  </LayoutInstagram>
</template>