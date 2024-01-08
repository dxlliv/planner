<script setup lang="ts">
defineProps<{
  data: any
  variant: string
}>()
</script>

<template>
  <v-textarea
    v-bind="$props"
    :placeholder="data.placeholder"
    hide-details
    spellcheck="false"
  />
</template>

<style scoped lang="scss"></style>
