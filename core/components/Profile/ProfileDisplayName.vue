<script setup lang="ts">
defineProps<{
  displayName?: string
}>()
</script>

<template>
  <div
    class="dx-profile__display-name"
  >
    <div v-if="displayName" v-text="displayName" />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.dx-profile__display-name {
  font-weight: bold;
  word-wrap: break-word;
}
</style>
