<script setup lang="ts">
defineProps<{
  data: any
  variant: string
}>()
</script>

<template>
  <v-text-field
    v-bind="$props"
    type="url"
    :placeholder="data.placeholder"
    hide-details
    spellcheck="false"
  />
</template>

<style scoped lang="scss"></style>
