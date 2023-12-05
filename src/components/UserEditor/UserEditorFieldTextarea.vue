<script setup lang="ts">
defineProps<{
  data: any
}>()
</script>

<template>
  <v-textarea
      :placeholder="data.placeholder"
      hide-details spellcheck="false"
  />
</template>

<style scoped lang="scss">

</style>