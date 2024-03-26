<script setup lang="ts">
import PagePlannerIndexDesktop from "./PagePlannerIndexDesktop.vue";
import PagePlannerIndexMobile from "./PagePlannerIndexMobile.vue";
</script>

<template>
  <PagePlannerIndexDesktop class="hidden-md-and-down" />
  <PagePlannerIndexMobile class="hidden-sm-and-up" />
</template>

<style scoped lang="scss">

</style>