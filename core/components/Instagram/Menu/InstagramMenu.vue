<template>
  <v-list density="compact" class="ig-menu">
    <div class="ig-menu__inner">
      <slot />
    </div>
  </v-list>
</template>

<style scoped lang="scss">
.ig-menu {
  padding: 16px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  &.v-theme--light {
    .ig-menu__inner {
      background: #EEE;
    }
  }

  &.v-theme--dark {
    .ig-menu__inner {
      background: #333;
    }
  }

  &__inner {
    border-radius: 12px;
  }

  :deep(.v-list) {
    padding: 0;
    margin: 0;
    background: none;
  }

  :deep(.v-list-item) {
    min-height: 44px !important;
  }

  :deep(.v-list-item__content) {
    font-size: 12px !important;
    padding: 4px 2px;
  }

  :deep(.v-divider) {
    margin: 0 !important;
    padding: 0 !important;
  }

  :deep(.text-overline) {
    display: none;
  }
}
</style>