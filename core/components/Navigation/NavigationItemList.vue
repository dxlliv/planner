<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <v-list-item :title="title" :min-height="56">
    <template #prepend>
      <slot name="icon" />
    </template>

    <slot />
  </v-list-item>
</template>

<style scoped lang="scss">
.v-list-item {
  cursor: pointer;

  :deep(.v-list-item-title) {
    font-size: 23px;
    line-height: inherit;
  }

  :deep(.v-list-item--active) {
    .v-list-item-title {
      font-weight: 800;
    }
  }

  :deep(.v-list-item__prepend) {
    display: grid;
    align-items: center;
    text-align: center;
    width: 68px;
    margin-right: 12px;

    svg {
      margin: 0 auto;
      width: 28px;
      height: 28px;
    }

    i {
      margin: 0 auto;
      font-size: 32px;
      opacity: 1;
    }

    .v-avatar {
      margin: 0 auto;
      border-width: 2px !important;
    }
  }

  // overlay

  :deep(.v-list-item__overlay) {
    opacity: 0;
  }

  &:hover {
    :deep(.v-list-item__overlay) {
      opacity: calc(var(--v-activated-opacity)* var(--v-theme-overlay-multiplier) * 0.5);
    }
  }

  &.v-theme--light {
    :deep(.v-avatar) {
      border-color: black;
    }
  }

  &.v-theme--dark {
    :deep(.v-avatar) {
      border-color: white;
    }
  }
}
</style>
