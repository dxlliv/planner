<script setup lang="ts">
defineProps<{
  user: IUser
}>()

const plannerConfig = usePlannerConfig()

const emit = defineEmits(["create", "export"])
</script>

<template>
  <v-navigation-drawer
    class="ig-navigation-drawer"
    :permanent="$vuetify.display.smAndUp"
    :rail="$vuetify.display.mdAndDown"
    :width="330"
    :rail-width="98"
  >
    <v-list density="compact" nav class="mt-2 mt-lg-0">

      <NavigationDrawerVerticalItem
        :title="$t('instagram.navigation.home')"
        to="/"
      >
        <template #icon>
          <InstagramIconHome />
        </template>
      </NavigationDrawerVerticalItem>

      <NavigationDrawerVerticalItem
        :title="$t('instagram.navigation.source')"
        :href="plannerConfig.project.links.source" target="_blank"
      >
        <template #icon>
          <InstagramIconMagnify />
        </template>
      </NavigationDrawerVerticalItem>

      <NavigationDrawerVerticalItem
        :title="$t('instagram.navigation.explore')"
        :href="plannerConfig.project.links.docs" target="_blank"
      >
        <template #icon>
          <InstagramIconExplore />
        </template>
      </NavigationDrawerVerticalItem>

      <NavigationDrawerVerticalItem
        :title="$t('instagram.navigation.support')"
        :href="plannerConfig.project.links.support" target="_blank"
      >
        <template #icon>
          <InstagramIconHeart />
        </template>

        <AppSupportDialog />
      </NavigationDrawerVerticalItem>

      <NavigationDrawerVerticalItem
        :title="$t('instagram.navigation.create')"
        @click="emit('create')"
      >
        <template #icon>
          <InstagramIconNewPost />
        </template>
      </NavigationDrawerVerticalItem>

      <NavigationDrawerVerticalItem
        :title="$t('instagram.navigation.profile')"
        :to="user.route"
      >
        <template #icon>
          <suspense>
            <InstagramUserAvatar
              :avatar="user.profile.avatar"
              :size="36"
            />
          </suspense>
        </template>
      </NavigationDrawerVerticalItem>
    </v-list>

    <v-list density="compact" nav class="ig-navigation-drawer__list-bottom">

      <NavigationDrawerVerticalItem
        v-if="user.hasUnsavedChanges"
        :title="$t('instagram.navigation.save')"
        base-color="primary"
        @click="user.save()"
      >
        <template #icon>
          <IconSave />
        </template>
      </NavigationDrawerVerticalItem>

      <!--
      <v-list-item
        v-if="!user.hasUnsavedChanges && user.hasLocalChanges"
        :title="$t('instagram.navigation.export')"
        @click="emit('export')"
        base-color="primary"
      >
        <template #prepend>
          <IconExport />
        </template>

        <v-dialog :max-width="700" activator="parent">
          <InstagramUserExport :user="user" />
        </v-dialog>
      </v-list-item>
      -->
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss">
.ig-navigation-drawer {
  position: fixed !important;
  background: none !important;
  display: grid !important;
  align-content: center;

  &__list-bottom {
    position: absolute !important;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
