<script setup lang="ts">
import { BitcoinIcon, EthereumIcon, IotaIcon, NanoIcon } from "vue3-simple-icons"

function onCopyBitcoinAddress() {
  window.prompt('Bitcoin address', 'bc1pfg9u4dawenprmexr5hd67085kypr3xml0apujvrehy94e9klaqvqxxg2kj')
}

function onCopyEthereumAddress() {
  window.prompt('Ethereum address', '0x734f3766A1BB8f74a8B7B2bE91Fe78Fe81C275EC')
}

function onCopyIotaAddress() {
  window.prompt('IOTA address', 'iota1qrrw547h94z4xp6sxgjhvl0xfzf7kl0pvx3yp5uguyehsxdy8cvx7wfka0m')
}

function onCopyNanoAddress() {
  window.prompt('NANO address', 'nano_1ketzx1gsyjqc5fozmd63975z5m786sbctxkhs88qhcqwyrdurrifrjji8hr')
}
</script>

<template>
  <v-dialog max-width="400" activator="parent">
    <v-card rounded flat>
      <v-card-text class="py-6">

        <v-list>
          <v-list-item
            rounded class="pt-2 pb-3 mb-2"
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
        <v-list class="py-0">
          <v-list-item rounded class="pb-0">
            <BitcoinIcon class="cursor-pointer mr-3" @click="onCopyBitcoinAddress" />
            <EthereumIcon class="cursor-pointer mr-3" @click="onCopyEthereumAddress" />
            <IotaIcon class="cursor-pointer mr-4" @click="onCopyIotaAddress" />
            <NanoIcon class="cursor-pointer" @click="onCopyNanoAddress" />
          </v-list-item>
        </v-list>

      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>