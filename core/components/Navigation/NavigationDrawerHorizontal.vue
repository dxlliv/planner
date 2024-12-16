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
      class="dx-navigation-drawer dx-navigation-drawer--horizontal"
      height="50"
    >
      <NavigationItemButton to="/">
        <InstagramIconHome />
      </NavigationItemButton>

      <NavigationItemButton :href="plannerConfig.project.links.source" target="_blank">
        <InstagramIconMagnify />
      </NavigationItemButton>

      <NavigationItemButton @click="emit('create')">
        <InstagramIconNewPost />
      </NavigationItemButton>

      <NavigationItemButton :href="plannerConfig.project.links.docs" target="_blank">
        <InstagramIconExplore />
      </NavigationItemButton>

      <NavigationItemButton>
        <nuxt-link :to="user.route">
          <InstagramUserAvatar
            :avatar="user.profile.avatar"
            :size="26" border
          />
        </nuxt-link>
      </NavigationItemButton>
    </v-bottom-navigation>
  </div>
</template>

<style scoped lang="scss">
.dx-navigation-drawer--horizontal {
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
