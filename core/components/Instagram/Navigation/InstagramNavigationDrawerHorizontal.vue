<script setup lang="ts">
const plannerConfig = usePlannerConfig()

defineProps<{
  user: IUser
}>()

const emit = defineEmits(["create"])
</script>

<template>
  <div>
    <v-bottom-navigation
      class="ig-navigation-drawer ig-navigation-drawer--horizontal"
      height="50"
    >
      <v-btn flat to="/">
        <InstagramIconHome />
      </v-btn>

      <v-btn flat :href="plannerConfig.project.links.source" target="_blank">
        <InstagramIconMagnify />
      </v-btn>

      <v-btn flat @click="emit('create')">
        <InstagramIconNewPost />
      </v-btn>

      <v-btn flat :href="plannerConfig.project.links.docs">
        <InstagramIconExplore />
      </v-btn>

      <v-btn flat>
        <nuxt-link :to="user.route">
          <InstagramUserAvatar
            :avatar="user.profile.avatar"
            :size="26"
          />
        </nuxt-link>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<style scoped lang="scss">
.ig-navigation-drawer--horizontal {
  background: rgb(var(--v-theme-background)) !important;
  position: fixed !important;
  bottom: 0 !important;

  :deep(.v-btn) {
    min-width: 20vw !important;
    padding: 0 !important;
    border-radius: 0 !important;
    margin-top: -1px;

    .v-btn__overlay {
      background: transparent !important;
    }
  }
}

.v-fab {
  position: fixed;
  right: 16px;
  bottom: 64px;
  z-index: 9999;

  .v-btn {
    min-width: inherit !important;
  }
}
</style>
