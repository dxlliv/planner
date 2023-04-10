<template>
  <InstagramProfilePage
      :profile="profile"
  />

  <template v-if="options.rulers">
    <PageRuler left />
    <PageRuler right />
  </template>
</template>

<script setup lang="ts">
import InstagramProfilePage from '~/components/Profile/ProfilePage/ProfilePage.vue'
import PageRuler from "../components/ruler/PageRuler.vue";

const route = useRoute()
const router = useRouter()

const profileStore = useProfileStore()

const profile = computed(() => profileStore.profile)
const options = inject('options')

onBeforeMount(async () => {
  await profileStore.loadProfile(route.params.username)
    .catch(e => {
      router.push({ name: 'index', hash: '#404' })
    })
})
</script>