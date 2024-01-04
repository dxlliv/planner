<script setup lang="ts">

</script>

<template>

  <v-container class="ig-index text-center py-16 align-content-center">

    <v-row>
      <v-col :cols="12" :md="7" align-self="center">

        <div
          class="d-inline-block mx-auto"
          style="max-width: 100%; overflow-x: auto;"
        >
          <UserSelectorList />
        </div>

      </v-col>
      <v-col :cols="12" :md="5" class="mt-10 mt-md-0">

        <MainIntro />
        <img class="mx-1 mt-5" src="https://img.shields.io/github/stars/dxlliv/planner?style=social" />

      </v-col>

    </v-row>

  </v-container>
</template>

<style scoped lang="scss">
.ig-index {
  display: grid;
  height: 100%;
}
</style>
