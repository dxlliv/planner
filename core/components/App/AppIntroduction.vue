<script setup lang="ts">
import { GitHubIcon } from "vue3-simple-icons"

const plannerConfig = usePlannerConfig()
</script>

<template>
  <v-card
    flat color="transparent"
    max-width="400"
    class="ig-intro mx-auto text-center"
  >

    <Logo size="large" class="mt-n3" />

    <!--
    <h2 class="hidden-md-and-up">
      Plan your Instagram grid<br />like a pro with IG Planner
    </h2>
    <h2 class="hidden-sm-and-down">Plan your Instagram grid like a pro</h2>
    -->

    <p class="mt-3">
      <a href="https://github.com/dxlliv/planner">
        dxlliv/planner
      </a> <span v-html="$t('pages.userSelect.intro.p1')" />
    </p>

    <p
      class="mt-3"
      v-html="$t('pages.userSelect.intro.p2')"
    />

    <br />

    <v-btn
      class="pr-12"
      flat :theme="$vuetify.theme.name === 'dark' ? 'light' : 'dark'"
      href="https://dxlliv.github.io/planner/docs/"
      :text="$t('common.documentation')"
    />

    <v-btn
      border
      icon flat
      class="ml-n9"
      :href="plannerConfig.project.links.source"
      title="Instagram Planner"
    >
      <GitHubIcon :size="20" />
    </v-btn>

  </v-card>
</template>

<style scoped lang="scss">
.ig-intro {
  p {
    a {
      color: inherit;
      opacity: 0.65;
      text-decoration: none;
    }

    br {
      @media (max-width: 350px) {
        display: none;
      }
    }
  }

  .v-btn {
    border-radius: 32px !important;

    svg {
      pointer-events: none;
    }

    i {
      margin-top: -2px;
      margin-right: -1px;
    }
  }

  &.v-theme--dark {
    .v-btn svg {
      fill: white;
    }
  }
}
</style>