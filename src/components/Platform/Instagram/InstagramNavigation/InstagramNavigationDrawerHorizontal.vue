<script setup lang="ts">
import {project} from "~/project/project";

defineProps<{
  user: IUser
  nav: any
}>()

const emit = defineEmits(['create', 'export'])
</script>

<template>
  <v-bottom-navigation
      class="ig-navigation-drawer ig-navigation-drawer--horizontal"
      height="50"
  >

    <v-btn :to="{ name: 'index' }">
      <InstagramIconHome />
    </v-btn>

    <v-btn :href="project.docs">
      <InstagramIconSupport />
    </v-btn>

    <v-btn :href="project.support" target="_blank">
      <InstagramIconReadme />
    </v-btn>

    <v-btn value="favorites">
      <InstagramIconDonors />
    </v-btn>

    <v-btn @click="emit('create')">
      <InstagramIconNewPost />
    </v-btn>

    <v-btn :to="user.route">
      <InstagramUserAvatar
          v-if="user.ready"
          :avatar="user.profile.avatar"
          :size="26"
      />
    </v-btn>

  </v-bottom-navigation>
</template>

<style scoped lang="scss">
.ig-navigation-drawer--horizontal {
  background: rgb(var(--v-theme-background)) !important;

  position: fixed !important;
  bottom: 0 !important;

  :deep(.v-btn) {
    min-width: 15vw !important;
    padding: 0 !important;

    .v-btn__overlay {
      background: transparent !important;
    }
  }
}
</style>