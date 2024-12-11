<template>
  <v-menu
    v-if="$vuetify.display.mdAndUp"
    content-class="dx-profile-selector__context-menu"
    activator="parent"
    transition="slide-y-transition"
    location="bottom center"
    scroll-strategy="close"
    :open-on-click="false"
    :open-delay="5000"
    :offset="[7, 0]"
  >
    <v-list flat border>
      <slot />
    </v-list>
  </v-menu>
  <v-bottom-sheet
    v-else
    close-on-content-click
  >
    <AppMenu>
      <slot />
    </AppMenu>
  </v-bottom-sheet>
</template>

<script setup lang="ts">
</script>