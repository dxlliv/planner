<script setup lang="ts">
const {t} = useI18n()

useHead({
  titleTemplate: () => {
    return t('pages.userSelect.meta.title')
  }
})
</script>

<template>
  <AppBackground />
  <PagePlannerIndexDesktop class="hidden-sm-and-down" />
  <PagePlannerIndexMobile class="hidden-md-and-up" />
</template>

<style scoped lang="scss">

</style>