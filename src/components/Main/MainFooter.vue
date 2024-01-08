<script setup lang="ts">
import { GithubIcon } from "vue3-simple-icons"

defineProps<{
  docs?: boolean
}>()
</script>

<template>
  <footer class="ig-footer text-overline py-3">
    <a href="https://github.com/dxlliv/planner">
      <GithubIcon width="14" height="23" class="mr-1" />
      Planner
    </a>

    <template v-if="docs">
      &middot;

      <a href="https://dxlliv.github.io/planner/docs/"> Docs </a>
    </template>
  </footer>
</template>

<style scoped lang="scss">
.ig-footer {
  text-align: center;
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

.v-application.v-theme--dark {
  .ig-footer a {
    color: rgb(168, 168, 168);

    svg {
      fill: lightgrey;
    }
  }
}
</style>
