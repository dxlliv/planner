<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    size?: string
  }>(),
  {
    size: "medium",
  },
)
</script>

<template>
  <nuxt-link
    :class="['dx-logo', `dx-logo--size-${size}`]"
    v-text="title"
  />
</template>

<style scoped lang="scss">
.dx-logo {
  display: inline-block;
  font-family: "Cookie";
  font-size: 56px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 2px;
  color: inherit;

  &--size-large {
    font-size: 48px;
  }
}
</style>
