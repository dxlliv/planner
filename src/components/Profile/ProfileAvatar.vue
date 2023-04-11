<template>
  <v-avatar>
    <v-img :src="src" />
  </v-avatar>
</template>

<script setup lang="ts">
defineProps({
    src: String
})
</script>

<style scoped lang="scss">

</style>