<script setup lang="ts">
defineProps<{
  data: any
}>()
</script>

<template>
  <v-text-field
      :placeholder="data.placeholder" type="url"
      hide-details spellcheck="false"
  />
</template>

<style scoped lang="scss">

</style>