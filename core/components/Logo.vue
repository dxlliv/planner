<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: string
  }>(),
  {
    size: "medium",
  },
)
</script>

<template>
  <router-link
    :class="['planner-logo', `planner-logo--size-${size}`]"
    to="/"
  >
    Planner
  </router-link>
</template>

<style scoped lang="scss">
.planner-logo {
  display: block;
  font-family: "Tektur";
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 2px;
  text-decoration: none;
  color: inherit;

  &--size-large {
    font-size: 48px;
  }
}
</style>
