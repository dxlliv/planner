<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <v-list-item class="px-0 mt-1">
    <v-list-item-title class="text-overline px-4" v-text="title" />

    <v-list density="compact" class="ma-0 pa-0">
      <slot />
    </v-list>
  </v-list-item>
</template>

<style scoped lang="scss">
.text-overline {
  opacity: 0.35;
}
</style>
