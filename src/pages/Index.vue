<template>
  <v-container class="text-left">
    <v-row no-gutters>
      <v-col
          v-for="(profile, p) of profiles"
          class="text-center"
      >
        <router-link :to="{ name: 'profile', params: { url: profile.url } }">
          <v-avatar :size="120">
            <v-img
                :src="profile.avatar"
            />
          </v-avatar>

          <h3 class="mt-4" v-text="profile.username" />
        </router-link>
        <a class="text-blue-grey-lighten-4" :href="`https://instagram.com/${profile.username}`" target="_blank">🡥</a>
      </v-col>
    </v-row>

    <v-divider class="mt-15 mb-5" />

    <footer class="text-center" v-if="!documentation">
      <v-btn
          class="bg-grey-lighten-4 text-grey-darken-2 text-black ml-4"
          @click="documentation = !documentation"
      >Documentation</v-btn>
      <v-btn
          class="bg-grey-lighten-4 text-grey-darken-2 ml-4"
          href="https://github.com/dvilla8/instagram-planner"
          target="_blank"
      >GitHub</v-btn>
    </footer>

    <Documentation v-if="documentation" />
  </v-container>
</template>

<script setup>
import {ref} from 'vue'
import Documentation from '~/components/Documentation.vue'
import {getProfiles} from "~/api/profiles";

const profiles = getProfiles()
const documentation = ref(false)
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;
}

footer {
  user-select: none;
}
</style>