<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <v-list-item :title="title">
    <template #prepend>
      <slot name="icon" />
    </template>
  </v-list-item>
</template>

<style scoped lang="scss">
.v-list-item {
  cursor: pointer;
  min-height: 56px;

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
      display: inline-block;
      zoom: 1.2;
      margin: 0 auto;
    }

    .v-icon {
      display: inline-block;
      opacity: 1;
      margin: 0 auto;

      &.mdi-content-save-outline {
        font-size: 33px;
        top: -3px;
      }
    }

    .v-avatar {
      margin: 0 auto;
      border-width: 2px !important;
    }
  }

  &.v-theme--light {
    :deep(svg) {
      fill: black;
    }

    :deep(.v-avatar) {
      border-color: black;
    }
  }

  &.v-theme--dark {
    :deep(svg) {
      fill: white;
    }

    :deep(.v-avatar) {
      border-color: white;
    }
  }
}
</style>
