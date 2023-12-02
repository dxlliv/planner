<script setup lang="ts">
defineProps<{
  data: any
}>()
</script>

<template>
  <v-text-field
      name="name"
      :placeholder="data.placeholder"
      hide-details
  />
</template>

<style scoped lang="scss">

</style>