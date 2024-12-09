<script setup lang="ts">

</script>

<template>
  <v-navigation-drawer
    class="dx-navigation-drawer"
    :permanent="$vuetify.display.smAndUp"
    :rail="$vuetify.display.mdAndDown"
    :width="300"
    :rail-width="98"
  >

    <v-list density="compact" nav class="dx-navigation-drawer__header">
      <slot name="header" />
    </v-list>

    <v-list density="compact" nav>
      <slot />
    </v-list>

    <v-list density="compact" nav class="dx-navigation-drawer__actions">
      <slot name="actions" />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.dx-navigation-drawer {
  position: fixed !important;
  background: none;
  display: grid;
  align-content: center;

  &__header {
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
  }

  &__actions {
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
  }
}
</style>