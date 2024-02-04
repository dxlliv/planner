<script setup lang="ts">
import { project } from "~/project/project"
</script>

<template>
  <DialogContent title="Deluxe Planner">
    <v-row no-gutters class="ma-0 fill-height">
      <v-col align-self="center" class="text-center">
        <p>
          Enjoy the free to use open-source version!<br />
          <router-link class="font-weight-black" to="/">Play with this Instance</router-link>
          or <a class="font-weight-black" :href="project.docs">Host Yours</a>.
        </p>
        <v-divider class="my-8" />
        <p class="mt-4">
          Request a Deluxe Planner crafted by <a :href="project.deluxe">dxlliv</a>.<br />
          Ask for features or extra customizations.
        </p>
        <br />
        <v-btn
          :href="project.deluxe" target="_blank"
          color="primary"
        >Request a no-label planner</v-btn>
      </v-col>
    </v-row>
  </DialogContent>
</template>

<style scoped lang="scss">
a {
  color: inherit;
  text-decoration: none;
}
</style>
