<script setup lang="ts">
const date = ref(new Date())
const emit = defineEmits(['update'])

watch(() => date.value, value => {
  emit('update', date.value)

  // close menu on date select
  menuEnabled.value = false
})

const menuEnabled = ref(false)
</script>

<template>
  <v-menu activator="parent" v-model="menuEnabled" :close-on-content-click="false">
    <v-date-picker
      v-model="date"
    />
  </v-menu>
</template>

<style scoped lang="scss"></style>
