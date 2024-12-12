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
  let minutes = date.value.getMinutes()

  const period = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12

  if (minutes.toString().length === 1) minutes = `0${minutes}`

  return `${hours}:${minutes} ${period}`
})
</script>

<template>
  <span class="dx-app-bar__date-time text-subtitle-1" v-text="time" />
</template>

<style scoped lang="scss">

</style>