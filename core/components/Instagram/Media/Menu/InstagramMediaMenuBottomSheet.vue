<template>
  <v-bottom-sheet
    activator="parent"

  >
    <AppMenu>
      <slot />
    </AppMenu>
  </v-bottom-sheet>
</template>