<script setup lang="ts">

</script>

<template>
  <router-link class="planner-logo" :to="{ name: 'index' }">
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
  color: black !important;
}
</style>