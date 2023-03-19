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

    <v-divider class="mt-15 mb-10" />

    <div class="intro text-center">
      <h2>Plan your Instagram grid like a pro</h2>
      <p class="mt-2">
        <a href="https://github.com/dxlliv/ig-planner">dxlliv/ig-planner</a> let you preview what your profile grid will look like.<br/>
        Clone the repository and build your definitive Instagram profile.
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