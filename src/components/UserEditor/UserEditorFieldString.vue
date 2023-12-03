<script setup lang="ts">
defineProps<{
  data: any
}>()
</script>

<template>
  <v-text-field
      :placeholder="data.placeholder"
      hide-details
  />
</template>

<style scoped lang="scss">

</style>