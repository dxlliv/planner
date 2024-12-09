<script setup lang="ts">
defineProps<{
  description?: string
}>()
</script>

<template>
  <div class="dx-profile__biography">
    <div v-if="description" v-html="description" />
    <slot />
  </div>
</template>

<style scoped lang="scss">
:deep(a) {
  color: rgb(var(--v-theme-primary));
}
</style>