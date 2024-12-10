<script setup lang="ts">
import { BitcoinIcon, EthereumIcon, PayPalIcon } from "vue3-simple-icons"

function onCopyBitcoinAddress() {
  window.prompt('Bitcoin address', 'bc1pfg9u4dawenprmexr5hd67085kypr3xml0apujvrehy94e9klaqvqxxg2kj')
}

function onCopyEthereumAddress() {
  window.prompt('Ethereum address', '0x734f3766A1BB8f74a8B7B2bE91Fe78Fe81C275EC')
}
</script>

<template>
  <v-dialog max-width="400" activator="parent">
    <v-card rounded flat>
      <v-card-text class="py-5">

        <v-list>
          <v-list-item
            rounded class="pt-2 pb-3 mb-2"
            title="Patreon"
            subtitle="become a patron"
            href="https://patreon.com/dxlliv"
          />
          <v-list-item
            rounded class="pt-2 pb-3 mb-2"
            title="GitHub"
            subtitle="become a sponsor"
            href="https://github.com/sponsors/dxlliv"
          />
        </v-list>
        <v-list class="py-0 mt-2 mb-3">
          <v-list-item rounded class="pb-0">
            <BitcoinIcon class="cursor-pointer mr-3" @click="onCopyBitcoinAddress" />
            <EthereumIcon class="cursor-pointer mr-3" @click="onCopyEthereumAddress" />
            <PayPalIcon class="cursor-pointer mr-3" href="https://paypal.me/dxlliv" target="_blank" />
          </v-list-item>
        </v-list>

      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>