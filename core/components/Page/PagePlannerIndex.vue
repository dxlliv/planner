<script setup lang="ts">
import UserSelectorPageDesktop from "../UserSelector/UserSelectorPage/UserSelectorPageDesktop.vue"
import UserSelectorPageMobile from "../UserSelector/UserSelectorPage/UserSelectorPageMobile.vue"

const {t} = useI18n()

useSeoMeta({
  title: t('pages.userSelect.meta.title')
})
</script>

<template>
  <AppBackground />
  <UserSelectorPageDesktop class="hidden-sm-and-down" />
  <UserSelectorPageMobile class="hidden-md-and-up" />
</template>

<style scoped lang="scss">

</style>