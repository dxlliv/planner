<script setup lang="ts">
import { useDate } from "vuetify"

const props = defineProps<{
  date?: string
}>()

const date = useDate()

const formatted = date
  .format(props.date, "fullDateWithWeekday")
  .split(",")
  .splice(1)
  .join(",")
</script>

<template>
  <div class="ig-user-post__date">
    <div class="px-4 py-3">
      <slot name="prepend" />
      <div>
        <small class="text-grey">
          {{ formatted }}
        </small>
      </div>
    </div>
    <slot name="append" />
  </div>
</template>

<style scoped lang="scss"></style>
