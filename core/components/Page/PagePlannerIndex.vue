<script setup lang="ts">
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