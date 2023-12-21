<template>
  <v-app>
    <suspense>
      <AppLoader>
        <router-view />
      </AppLoader>
    </suspense>
  </v-app>
</template>

<style lang="scss">
@import "./assets/styles/index.scss";
</style>
