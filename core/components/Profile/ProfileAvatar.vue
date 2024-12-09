<script setup lang="ts">
withDefaults(
  defineProps<{
    src?: any
    size?: number
  }>(),
  {
    size: 120,
  },
)
</script>

<template>
  <v-avatar :size="size" class="dx-profile__avatar">
    <v-img v-if="src" :src="src" cover />
    <v-icon v-else icon="mdi-account" :size="size / 2.5" />
  </v-avatar>
</template>

<style scoped lang="scss">
:deep(img) {
  pointer-events: none;
}
</style>