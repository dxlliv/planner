<script setup lang="ts">
import { project } from "../../../project/project";

defineProps<{
  user: IUser
}>()

const emit = defineEmits(["create", "export"])
</script>

<template>
  <v-bottom-navigation
    class="ig-navigation-drawer ig-navigation-drawer--horizontal"
    height="50"
  >
    <v-btn to="/">
      <InstagramIconHome />
    </v-btn>

    <v-btn :href="project.support" target="_blank">
      <InstagramIconHeart />
    </v-btn>

    <v-btn @click="emit('create')">
      <InstagramIconNewPost />
    </v-btn>

    <v-btn :href="project.docs">
      <InstagramIconExplore />
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
    min-width: 20vw !important;
    padding: 0 !important;
    margin-top: -1px;

    .v-btn__overlay {
      background: transparent !important;
    }
  }
}
</style>
