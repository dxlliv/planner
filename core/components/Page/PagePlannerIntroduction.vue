<script setup lang="ts">
const plannerConfig = usePlannerConfig()

import {GitHubIcon,PatreonIcon,BitcoinIcon,EthereumIcon,IotaIcon} from "vue3-simple-icons"

const {t} = useI18n()
const { copy } = useClipboard()

function onCopyBitcoinAddress() {
  window.prompt('Bitcoin address', 'bc1pfg9u4dawenprmexr5hd67085kypr3xml0apujvrehy94e9klaqvqxxg2kj')
}

function onCopyEthereumAddress() {
  window.prompt('Ethereum address', '0x734f3766A1BB8f74a8B7B2bE91Fe78Fe81C275EC')
}

function onCopyIotaAddress() {
  window.prompt('IOTA address', 'iota1qrrw547h94z4xp6sxgjhvl0xfzf7kl0pvx3yp5uguyehsxdy8cvx7wfka0m')
}

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

  <v-container class="text-center py-16">
    <div class="mx-auto" style="max-width: 400px;">
      <v-row>
        <v-col :cols="12" sm="auto" class="flex-grow-sm-1">

          <h1 class="text-h4 font-weight-bold">Instagram Planner</h1>
          <p class="text-grey text-subtitle-1">
            Plan your Instagram profile like a pro
          </p>

        </v-col>
        <v-col :cols="12" sm="auto" class="flex-grow-sm-0 mt-n4 mt-sm-0" align-self="center">

          <v-btn
            size="large" icon variant="plain" rounded :min-width="32"
            :href="plannerConfig.project.links.source"
          >
            <GithubIcon fill="grey" />
          </v-btn>

        </v-col>
      </v-row>
    </div>

    <p class="mt-14">
      Whether you're obsessed with perfection, passionate about aesthetics, or simply love curating your feed, <br class="hidden-sm-and-down" />
      <b>dxlliv/planner</b> is the perfect tool that supports your Instagram strategy on the fly. No registration required.
    </p>

    <v-row class="my-12">
      <v-col :cols="12" :md="4">
        <v-card
          :border="$vuetify.display.mdAndUp" flat rounded class="cursor-pointer"
          title="Support the developer"
          subtitle="ensure things are delivered"
        >
          Planner is free to use and open-source,<br class="hidden-md-and-down" />
          a little support will be greatly appreciated.

          <v-dialog max-width="400" activator="parent">
            <v-card rounded flat>
              <v-list>
                <v-list-item
                  rounded class="pt-2 pb-3 mb-2"
                  logo="/icons/serveunsitoweb.webp"
                  title="Patreon"
                  subtitle="become a patron"
                  href="https://patreon.com/dxlliv"
                />
                <v-list-item
                  rounded class="pt-2 pb-3 mb-2"
                  logo="/favicon.ico"
                  title="PayPal"
                  subtitle="buy me a coffee"
                  href="https://paypal.me/dxlliv"
                />
              </v-list>
              <v-list class="py-0 mb-n2">
                <v-list-item rounded class="pb-0">
                  <BitcoinIcon class="cursor-pointer mr-3" @click="onCopyBitcoinAddress" />
                  <EthereumIcon class="cursor-pointer mr-3" @click="onCopyEthereumAddress" />
                  <IotaIcon class="cursor-pointer" @click="onCopyIotaAddress" />
                </v-list-item>
              </v-list>
            </v-card>
          </v-dialog>
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
          something that is truly *your* social page.
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
          configure your profile and enable features.
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col :cols="12" :md="7" align-self="center">

        <p class="mt-8 mb-2">
          <h6 class="text-h6">Dive into dxlliv/planner</h6>
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
          These planners run entirely in your browser and what you upload is stored locally. <br class="hidden-md-and-down" />
          It's also safe to use our demo; just create a new profile and start organizing.
        </p>

        <v-btn color="primary" size="large" to="/">Try Plxnner</v-btn>

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
$fontPlanner: "Quicksand", sans-serif;

p {
  font-family: $fontPlanner;
}

.v-card {
  padding: 22px 24px 36px 24px;
  font-family: $fontPlanner;

  &--rounded {
    border-radius: 16px;
  }

  :deep(.v-card-title) {
    font-size: 20px;
    padding-bottom: 2px;
    margin-bottom: 8px;
  }

  :deep(.v-card-subtitle) {
    font-size: 15px;
    margin-bottom: 12px;
  }
}

code {
  border: 1px solid rgba(88, 88, 88, 0.25);
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