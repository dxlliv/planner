<script setup lang="ts">
import { useDate } from "vuetify"

const emit = defineEmits(['update'])

const props = defineProps<{
  date?: string | Date
}>()

const date = useDate()

const formatted = computed(() => {
  return date
    .format(props.date, "fullDateWithWeekday")
    .split(",")
    .splice(1)
    .join(",")
})
</script>

<template>
  <div>
    <small class="text-grey cursor-pointer">
      {{ formatted }}

      <InstagramPostDateEditor
        @update="value => emit('update', value)"
      />
    </small>
  </div>
</template>

<style scoped lang="scss"></style>
