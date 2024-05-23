<script setup lang="ts">
const plannerConfig = usePlannerConfig()

import {GitHubIcon} from "vue3-simple-icons"

const {t} = useI18n()
const { copy } = useClipboard()

function onCopyCreatePlannerCode() {
  copy('npx create-plxnner planner')
}

useSeoMeta({
  title: t('pages.about.meta.title'),
  description: t('pages.about.meta.description'),
  ogImage: 'https://repository-images.githubusercontent.com/401183758/4aabbd7f-b923-4992-8b31-6f07639e6540',
  twitterCard: "summary",
  twitterImage: '/app/twitterImage.webp',
  lang: "en"
})
</script>

<template>
  <AppBackground />

  <v-container class="text-center px-8 py-16">
    <div class="mx-auto text-center">

      <h1 class="text-h4 font-weight-bold">Instagram Planner</h1>
      <p class="text-grey text-subtitle-1">
        Plan your Instagram<br class="hidden-sm-and-up" /> profiles like a pro
      </p>

    </div>

    <p class="mt-14">
      Whether you're obsessed with perfection, passionate about aesthetics, or simply love curating your feed, <br class="hidden-sm-and-down" />
      <b>dxlliv/planner</b> is the perfect tool that supports your Instagram strategy on the fly. No registration required.
    </p>

    <v-row class="my-12">
      <v-col :cols="12" :md="4">
        <v-card
          :border="$vuetify.display.mdAndUp" flat rounded
          class="v-card--link cursor-pointer"
          title="Support the developer"
          subtitle="ensure things are delivered"
        >
          <span class="v-card__overlay" />
          Planner is free to use and open-source,<br class="hidden-md-and-down" />
          a little support will be greatly appreciated

          <AppSupportDialog />
        </v-card>
      </v-col>
      <v-col :cols="12" :md="4">
        <v-card
          :border="$vuetify.display.mdAndUp" flat rounded
          title="Get an exclusive planner"
          subtitle="delicious cookies are included"
          href="https://dxlliv.dev/#planner"
        >
          Maximize creativity and stand out with<br class="hidden-md-and-down" />
          something that is truly *your* social page
        </v-card>
      </v-col>
      <v-col :cols="12" :md="4">
        <v-card
          :border="$vuetify.display.mdAndUp" flat rounded
          title="Explore the documentation"
          subtitle="the place to find out about plxnner"
          href="https://dxlliv.github.io/planner/docs/"
        >
          Discover how to set up your own instance,<br class="hidden-md-and-down" />
          configure your profile and enable features
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col :cols="12" :md="7" align-self="center">

        <p class="mt-8 mb-2">
          <h6 class="text-h6 text-grey">Dive into dxlliv/planner</h6>
        </p>

        <p class="mb-6">
          For nerds, enthusiasts, and those who take their Instagram game seriously. <br class="hidden-md-and-down" />
          Bootstrap a planner in seconds with a command and start planning your grid.
        </p>

        <code>
          <span>npx create-plxnner planner</span><AppButton>
            <v-icon
              icon="mdi-content-copy"
              @click="onCopyCreatePlannerCode"
            />
          </AppButton>
        </code>

        <br />

        <p class="mt-6 mb-6">
          This project runs entirely in the browser and what you upload is stored locally. <br class="hidden-md-and-down" />
          You can use the demo safely, just create a new profile and start organizing.
        </p>

        <v-btn color="primary" size="large" to="/">Try Plxnner</v-btn>
        <v-btn
          size="large" icon flat variant="plain" class="ml-3"
          :width="44" :height="44"
          :href="plannerConfig.project.links.source"
        >
          <GitHubIcon size="20px" style="margin-top: -3px;" />
        </v-btn>

      </v-col>
      <v-col :cols="12" :md="5" class="mt-12 mt-md-0">

        <AppIntroPhone>
          <iframe src="https://dxlliv.github.io/planner/instagram/dxlliv" />
        </AppIntroPhone>

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.v-container {
  font-family:  "Inter", sans-serif;
}

h1 {
  line-height: 64px;
  letter-spacing: -.4px !important;
  font-size: 56px !important;

  & + p {
    line-height: 36px;
    font-size: 24px !important;
    font-weight: 500 !important;
  }
}

.v-card {
  padding: 22px 24px 36px 24px;
  border-color: #e9e9e9;
  font-size: 14px;
  line-height: 24px;

  &--rounded {
    border-radius: 16px;
  }

  :deep(.v-card-title) {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
    border: 0;
  }

  :deep(.v-card-subtitle) {
    font-size: 15px;
    margin-bottom: 12px;
  }
}

code {
  border: 1px solid rgba(160, 160, 160, 0.33);
  padding: 13px 0 16px 16px;
  border-radius: 8px;
  user-select: text;

  span {
    margin-top: 2px;
  }

  button {
    margin-top: 1px;
  }
}
</style>