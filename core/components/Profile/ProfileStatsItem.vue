<script setup lang="ts">
defineProps<{
  count: string
  text: string
}>()
</script>

<template>
  <li>
    <b v-text="count" />
    <span class="ml-md-2" v-text="text" />
  </li>
</template>

<style scoped lang="scss">
li {
  @media(max-width: 599px) {
    b {
      display: block;
    }
  }
}
span {
  opacity: 0.8;
}
</style>