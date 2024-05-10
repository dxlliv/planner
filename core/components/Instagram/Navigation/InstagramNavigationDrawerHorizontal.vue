<script setup lang="ts">
const plannerConfig = usePlannerConfig()

defineProps<{
  user: IUser
}>()

const emit = defineEmits(["create", "export"])
</script>

<template>
  <div>
    <v-bottom-navigation
      class="ig-navigation-drawer ig-navigation-drawer--horizontal"
      height="50"
    >
      <v-btn to="/">
        <InstagramIconHome />
      </v-btn>

      <v-btn :href="plannerConfig.project.links.support" target="_blank">
        <InstagramIconHeart />
      </v-btn>

      <v-btn @click="emit('create')">
        <InstagramIconNewPost />
      </v-btn>

      <v-btn :href="plannerConfig.project.links.docs">
        <InstagramIconExplore />
      </v-btn>

      <v-btn>
        <nuxt-link :to="user.route">
          <InstagramUserAvatar
            :avatar="user.profile.avatar"
            :size="26"
          />
        </nuxt-link>
      </v-btn>
    </v-bottom-navigation>

    <v-fab
      v-if="user.hasUnsavedChanges"
      icon color="primary"
      absolute rounded
      @click="user.save()"
    >
      <IconSave />
    </v-fab>

    <v-fab
      v-if="!user.hasUnsavedChanges && user.hasLocalChanges"
      icon color="primary"
      absolute rounded
      @click="emit('export')"
    >
      <IconExport />
    </v-fab>
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
