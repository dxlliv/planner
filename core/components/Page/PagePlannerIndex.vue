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
  <UserSelectorPageDesktop v-if="$vuetify.display.mdAndUp" />
  <UserSelectorPageMobile v-else />
</template>

<style scoped lang="scss">

</style>