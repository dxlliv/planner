<template>
  <v-container class="text-left">
    <v-row no-gutters>
      <v-col
          v-for="(profile, p) of profiles"
          class="text-center"
      >
        <InstagramProfile :profile="profile" />
      </v-col>
    </v-row>

    <v-divider class="mt-15 mb-10" />

    <div class="ig-planner__intro text-center">
      <h2>Plan your Instagram grid like a pro</h2>
      <p class="mt-2">
        <a href="https://github.com/dxlliv/ig-planner">dxlliv/ig-planner</a> let you preview what your profile grid will look like.<br/>
        Clone the repository and build your definitive Instagram profile.
      </p>
    </div>

  </v-container>
</template>

<script setup lang="ts">
import InstagramProfile from "../components/Profile/Profile.vue";

const profiles = computed(() => Object.values(useConfigStore().profiles))
</script>

<style scoped lang="scss">
.ig-planner__intro {
  a {
    color: inherit;
    opacity: 0.65;
    text-decoration: none;
  }
}

footer {
  user-select: none;
}
</style>