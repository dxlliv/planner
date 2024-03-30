<script setup lang="ts">
const props = defineProps<{
  route: string
}>()

const {baseURL} = useNuxtApp().$config.app
const postRoute = `${baseURL.slice(0, -1)}${props.route}`

function onMediaRouteLink(e) {
  e.preventDefault()

  history.pushState({}, "", postRoute);
}
</script>

<template>
  <a @click="onMediaRouteLink" :href="postRoute" />
</template>

<style scoped lang="scss">
a {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>