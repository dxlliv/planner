<script setup lang="ts">
import {GithubIcon,PatreonIcon} from 'vue3-simple-icons'
</script>

<template>
  <v-card
    border flat max-width="400"
    class="ig-intro mx-auto pa-8 pb-10 text-center"
  >
    <Logo class="mb-5" />

    <!--
    <h2 class="hidden-md-and-up">
      Plan your Instagram grid<br />like a pro with IG Planner
    </h2>
    <h2 class="hidden-sm-and-down">Plan your Instagram grid like a pro</h2>
    -->
    <p class="mt-5 text-grey-darken-1">
      <a href="https://github.com/dxlliv/planner">dxlliv/planner</a>
      let you preview<br />what your profiles will look like.
    </p>
    <p class="mt-3 text-grey-darken-1">
      Bring your grid to the next level<br />with a text editor or interactively.
    </p>

    <br />

    <v-btn class="pr-7" color="black" flat href="https://dxlliv.github.io/planner/docs/">
      Documentation
    </v-btn>

    <v-btn
      border icon class="ml-n4"
      href="https://www.patreon.com/dxlliv" target="_blank"
    >
      <PatreonIcon width="18px" />

      <v-tooltip
        location="right"
        activator="parent"
      >
        Support the project on Patreon
      </v-tooltip>
    </v-btn>

  </v-card>
</template>

<style scoped lang="scss">
.ig-intro {
  p a {
    color: inherit;
    opacity: 0.65;
    text-decoration: none;
  }

  .v-btn svg {
    pointer-events: none;
  }
}
</style>