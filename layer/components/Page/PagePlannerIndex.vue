<script setup lang="ts">
import PagePlannerIndexDesktop from "./PagePlannerIndexDesktop.vue";
import PagePlannerIndexMobile from "./PagePlannerIndexMobile.vue";
</script>

<template>
  <PagePlannerIndexDesktop v-if="$vuetify.display.mdAndUp" />
  <PagePlannerIndexMobile v-else />
</template>

<style scoped lang="scss">

</style>