<script setup lang="ts">

</script>

<template>
  <v-container class="ig-index text-center align-content-center">
    <v-row>
      <v-col :cols="12" :md="7" align-self="center" class="pr-md-8">
        <UserSelectorList class="mb-n3" />
      </v-col>
      <v-col :cols="12" :md="5" class="mt-10 mt-md-0" align-self="center">
        <AppIntroduction />
        <!--
        <MainFooter class="pb-0" />
        <img class="mx-1 mt-5" src="https://img.shields.io/github/stars/dxlliv/planner?style=social" />
        -->
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.ig-index {
  display: grid;
  height: 100%;
  max-width: 960px;

  :deep(.ig-user-selector-list) {
    max-width: calc(100vw - 48px);
  }
}
</style>