<script setup lang="ts">
defineProps<{
  data: any
  variant: string
}>()
</script>

<template>
  <v-textarea
    v-bind="$props"
    :label="$t(data.label)"
    :placeholder="$t(data.placeholder)"
    hide-details
    spellcheck="false"
  />
</template>

<style scoped lang="scss"></style>
