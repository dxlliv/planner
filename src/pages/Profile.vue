<template>
  <InstagramProfile
      :profile="profile.value"
  />

  <template v-if="options.rulers">
    <PageRuler left />
    <PageRuler right />
  </template>
</template>

<script setup lang="ts">
import InstagramProfile from '~/components/instagram/InstagramProfile.vue'
import PageRuler from "../components/ruler/PageRuler.vue";

import {onBeforeMount, reactive, inject, onMounted} from "vue";
import {useRouter} from "vue-router";
import {loadProfile} from "~/api/profiles";

const router = useRouter()

const profile = reactive({})
const options = inject('options')

onBeforeMount(async () => {
  const username = router.currentRoute.value.params.url

  await loadProfile(username)
    .then(data => {
      profile.value = data
    })
    .catch(e => {
      router.push({ name: 'index', hash: '#404' })
    })
})
</script>