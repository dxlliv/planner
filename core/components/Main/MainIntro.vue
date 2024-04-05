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
      </a> <span v-html="$t('pages.userSelect.intro.p1')" />
    </p>

    <p
      class="mt-3 text-grey-darken-1"
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
      icon
      class="ml-n9"
      to="/instagram"
      title="Instagram Planner"
    >
      <v-icon icon="mdi-shimmer" />

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

    i {
      margin-top: -2px;
      margin-right: -1px;
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
