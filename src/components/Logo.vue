<script setup lang="ts">
const {size} = withDefaults(defineProps<{
  size?: string
}>(), {
  size: 'medium'
})
</script>

<template>
  <router-link :class="['planner-logo', `planner-logo--size-${size}`]" :to="{ name: 'index' }">
    Planner
  </router-link>
</template>

<style scoped lang="scss">
.planner-logo {
  display: block;
  font-family: "Cookie";
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 2px;
  text-decoration: none;

  &--size-large {
    font-size: 40px;
  }
}
</style>