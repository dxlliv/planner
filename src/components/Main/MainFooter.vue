<script setup lang="ts">
import {GithubIcon} from 'vue3-simple-icons'
</script>

<template>
  <footer class="ig-footer text-overline py-6">
    <a href="https://github.com/dxlliv/ig-planner">
      <GithubIcon width="14" height="23" class="mr-1" />
      IG Planner
    </a>

    &middot;

    <a href="https://dxlliv.github.io/ig-planner/docs">
      Docs
    </a>
  </footer>
</template>

<style scoped lang="scss">
.ig-footer {
  font-size: 13px;
  color: #8e8e8e;

  a {
    color: #333;
    text-decoration: none;

    svg {
      vertical-align: -6px;
    }
  }
}
</style>
