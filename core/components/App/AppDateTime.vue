<script setup lang="ts">
const date = ref(null)

onMounted(() => {
  date.value = new Date()

  setInterval(() => date.value = new Date(), 500)
})

const time = computed(() => {
  if (!date.value) {
    return ''
  }

  let hours = date.value.getHours()
  if (hours.toString().length === 1) hours = `0${hours}`

  let minutes = date.value.getMinutes()
  if (minutes.toString().length === 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
})
</script>

<template>
  <span v-text="time" />
</template>

<style scoped lang="scss">

</style>