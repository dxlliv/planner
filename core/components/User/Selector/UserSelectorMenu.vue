<template>
  <v-menu
    v-if="$vuetify.display.mdAndUp"
    content-class="ig-profile-selector__context-menu"
    activator="parent"
    transition="slide-y-transition"
    location="bottom center"
    scroll-strategy="close"
    :open-on-click="false"
    :open-delay="5000"
    :offset="[7, 0]"
  >
    <slot />
  </v-menu>
  <v-bottom-sheet
    v-else
    close-on-content-click
  >
    <InstagramMenu>
      <slot />
    </InstagramMenu>
  </v-bottom-sheet>
</template>
