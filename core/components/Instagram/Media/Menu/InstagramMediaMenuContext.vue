<template>
  <v-menu
    content-class="dx-media__menu-context text-left"
    transition="slide-y-transition"
    attach
    :close-on-content-click="false"
    @click.stop
  >
    <slot />
  </v-menu>
</template>

<style scoped lang="scss">
:deep(.dx-media__menu-context) {
  right: 0;
  bottom: 0;

  .v-list-item {
    &:first-child {
      margin-top: 0 !important;
    }
  }
}
</style>