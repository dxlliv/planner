<script setup lang="ts">
</script>

<template>
  <v-card
    flat color="transparent"
    max-width="400"
    class="ig-intro mx-auto text-center"
  >

    <AppLogo to="/" title="Planner" size="large" class="mt-n3" />

    <!--
    <h2 class="hidden-md-and-up">
      Plan your Instagram grid<br />like a pro with IG Planner
    </h2>
    <h2 class="hidden-sm-and-down">Plan your Instagram grid like a pro</h2>
    -->

    <p class="mt-4">
      <a href="https://github.com/dxlliv/planner">
        dxlliv/planner
      </a> <span v-html="$t('pages.userSelect.intro.p1')" />
    </p>

    <p
      class="mt-3 mb-7"
      v-html="$t('pages.userSelect.intro.p2')"
    />

    <v-btn
      href="https://dxlliv.github.io/planner/docs/"
      :text="$t('common.documentation')"
      size="large"
    />

  </v-card>
</template>

<style scoped lang="scss">
.ig-intro {
  font-size: 21px;

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