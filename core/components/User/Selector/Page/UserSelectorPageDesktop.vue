<script setup lang="ts">

</script>

<template>
  <v-container class="dx-index text-center align-content-center">
    <v-row>
      <v-col :cols="12" :md="8" align-self="center" class="pr-md-8">
        <UserSelectorList class="mb-n3" />
      </v-col>
      <v-col :cols="12" :md="4" class="mt-10 mt-md-0" align-self="center">
        <UserPhone>
          <AppIntroduction />
        </UserPhone>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.dx-index {
  display: grid;
  height: 100%;
  max-width: 960px;

  :deep(.dx-user-selector-list) {
    max-width: calc(100vw - 48px);
  }
}
</style>