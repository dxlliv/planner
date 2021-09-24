<template>
  <v-container class="text-left">
    <v-row no-gutters>
      <v-col
          v-for="(profile, p) of profiles"
          class="text-center"
      >
        <router-link :to="{ name: 'profile', params: { url: profile.url } }">
          <v-avatar :size="120">
            <v-img :src="profile.avatar" />
          </v-avatar>

          <h3 class="mt-4" v-text="profile.username" />
        </router-link>
        <a class="text-blue-grey-lighten-4" :href="`https://instagram.com/${profile.username}`" target="_blank">🡥</a>
      </v-col>
    </v-row>

    <v-divider class="mt-15 mb-5" />

    <div class="intro text-center mt-8">
      <h4>Plan your Instagram grid like a pro</h4>
      <p class="mt-2">
        With <i>Instagram Planner</i> you can preview what your profile grid will look like.<br/>
        It's a web app made with Vue.js and is meant to be used in development mode.
      </p>
      <p class="mt-2">
        You just need Node.js and a code editor to make changes to a simple <i>.json</i> file.<br />
        <a href="https://dxlliv.github.io/ig-planner/docs" target="_blank">Read the docs</a>. If you like this open-source project, feel free to
        <a href="https://paypal.me/dxlliv" target="_blank">make a donation</a>.
      </p>
    </div>

  </v-container>
</template>

<script setup>
import {getProfiles} from "~/api/profiles";

const profiles = getProfiles()
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;
}

div.intro {
  a {
    color: #6a7079;
  }
}

footer {
  user-select: none;
}
</style>