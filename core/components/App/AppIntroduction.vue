<script setup lang="ts">
import { GitHubIcon } from "vue3-simple-icons"

const plannerConfig = usePlannerConfig()
</script>

<template>
  <v-card
    flat color="transparent"
    max-width="400"
    class="dx-intro mx-auto text-center"
  >

    <AppLogo to="/" title="Planner" size="large" class="mt-n2" />

    <!--
    <h2 class="hidden-md-and-up">
      Plan your Instagram grid<br />like a pro with IG Planner
    </h2>
    <h2 class="hidden-sm-and-down">Plan your Instagram grid like a pro</h2>
    -->

    <p class="mt-4">
      <a :href="plannerConfig.project.links.docs" target="_blank">
        dxlliv/planner
      </a> <span v-html="$t('pages.userSelect.intro.p1')" />
    </p>

    <p
      class="mt-3 mb-7"
      v-html="$t('pages.userSelect.intro.p2')"
    />

    <v-btn
      :href="plannerConfig.project.links.docs" target="_blank"
      :text="$t('common.documentation')"
      size="large"
      :height="48"
    />

    <v-btn
      :href="plannerConfig.project.links.source" target="_blank"
      icon variant="text"
      :width="48" :height="48" class="ml-3"
    >
      <GitHubIcon :size="20" />
    </v-btn>

  </v-card>
</template>

<style scoped lang="scss">
.dx-intro {
  font-size: 18px;

  p {
    opacity: 0.8;

    a {
      color: inherit;
      opacity: 0.7;
      text-decoration: none;
    }

    br {
      @media (max-width: 350px) {
        display: none;
      }
    }
  }

  .v-btn {
    svg {
      pointer-events: none;
    }

    i {
      margin-top: -2px;
      margin-right: -1px;
    }
  }
}
</style>