<script setup lang="ts">
import { PatreonIcon } from "vue3-simple-icons"
</script>

<template>
  <v-card
    flat color="transparent"
    max-width="400"
    class="ig-intro mx-auto pa-8 pb-10 text-center"
  >

    <Logo size="large" class="mt-n3" />

    <!--
    <h2 class="hidden-md-and-up">
      Plan your Instagram grid<br />like a pro with IG Planner
    </h2>
    <h2 class="hidden-sm-and-down">Plan your Instagram grid like a pro</h2>
    -->

    <p class="mt-3 text-grey-darken-1">
      <a href="https://github.com/dxlliv/planner">
        dxlliv/planner
      </a> <span v-html="$t('intro.intro.p1')" />
    </p>

    <p
      class="mt-3 text-grey-darken-1"
      v-html="$t('intro.intro.p2')"
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
      icon
      class="ml-n9"
      href="https://www.patreon.com/dxlliv"
      target="_blank"
    >
      <PatreonIcon width="18px" />

      <!--
      <v-tooltip
        location="right"
        activator="parent"
        :text="$t('common.support')"
      />
      -->
    </v-btn>

  </v-card>
</template>

<style scoped lang="scss">
.ig-intro {
  backdrop-filter: blur(0.75px);

  .planner-logo {
    color: black;
  }

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
  }

  &.v-theme--dark {
    .planner-logo {
      color: white;
    }

    .v-btn svg {
      fill: white;
    }
  }
}
</style>
