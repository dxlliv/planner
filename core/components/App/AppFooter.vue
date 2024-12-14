<script setup lang="ts">
import { GitHubIcon } from "vue3-simple-icons"

const plannerConfig = usePlannerConfig()

defineProps<{
  docs?: boolean
}>()
</script>

<template>
  <footer class="dx-footer text-grey text-overline py-3">
    <a :href="plannerConfig.project.links.docs">
      <GitHubIcon width="14" height="23" class="mr-1" />
      Planner
    </a>

    &middot;

    <AppLanguageSwitcher />

    <template v-if="docs">
      &middot;

      <a href="https://dxlliv.github.io/planner/docs/"> Docs </a>
    </template>
  </footer>
</template>

<style scoped lang="scss">
.dx-footer {
  text-align: center;
  font-size: 13px;

  a {
    color: #333;
    text-decoration: none;

    svg {
      vertical-align: -6px;
    }
  }
}

.v-application.v-theme--dark {
  .dx-footer a {
    color: rgb(168, 168, 168);

    svg {
      fill: lightgrey;
    }
  }
}
</style>
