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
  .v-list-item {
    min-height: 28px;
    padding-top: 2px;
    padding-bottom: 2px;

    &:first-child {
      margin-top: 0 !important;
    }

    &-title {
      font-size: 13px;
    }
  }
}
</style>