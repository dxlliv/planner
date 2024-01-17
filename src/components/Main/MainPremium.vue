<script setup lang="ts">
import { project } from "~/project/project"
</script>

<template>
  <v-card height="60vh">
    <v-card-title v-text="`Unlock premium editor`" />
    <v-card-text>
      <v-row no-gutters class="ma-0 fill-height">
        <v-col align-self="center" class="text-center">
          <p>
            I've recently integrated Pintura in the planner,<br />
            a powerful JavaScript Image Editor by PQINA.
          </p>
          <p class="mt-4">
            You can try it out in this demo, but is limited<br />
            and has watermarks because Pintura isn't free.
          </p>
          <p class="mt-4">
            Support the goal on Patreon and I'll organize<br />
            to provide a Premium version of this planner,<br />
            with a valid license and the video editor too.
          </p>
          <br />
          <v-btn
            :href="project.support" target="_blank"
            color="primary"
          >Become a Patron</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
a {
  color: inherit;
  text-decoration: none;
}
</style>
