<script setup lang="ts">
defineProps<{
  user: IUser
}>()

const extraStore = useExtraStore()
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

      <v-list-item :title="$t('instagram.navigation.home')" to="/">
        <template #prepend>
          <InstagramIconHome />
        </template>
      </v-list-item>

      <v-list-item
        :title="$t('instagram.navigation.source')"
        :href="plannerConfig.project.links.source" target="_blank"
      >
        <template #prepend>
          <InstagramIconMagnify />
        </template>
      </v-list-item>

      <v-list-item
        :title="$t('instagram.navigation.explore')"
        :href="plannerConfig.project.links.docs" target="_blank"
      >
        <template #prepend>
          <InstagramIconExplore />
        </template>
      </v-list-item>

      <v-list-item :title="$t('instagram.navigation.support')">
        <template #prepend>
          <InstagramIconHeart />
        </template>

        <AppSupportDialog />
      </v-list-item>

      <v-list-item :title="$t('instagram.navigation.create')" @click="emit('create')">
        <template #prepend>
          <InstagramIconNewPost />
        </template>
      </v-list-item>

      <v-list-item :title="$t('instagram.navigation.profile')" :to="user.route">
        <template #prepend>
          <suspense>
            <InstagramUserAvatar :avatar="user.profile.avatar" :size="36" class="ml-4" />
          </suspense>
        </template>
      </v-list-item>
    </v-list>

    <v-list density="compact" nav class="ig-navigation-drawer__list-bottom">

      <v-list-item
        v-if="user.hasUnsavedChanges"
        :title="$t('instagram.navigation.save')"
        @click="user.save()"
        base-color="primary"
      >
        <template #prepend>
          <IconSave />
        </template>
      </v-list-item>

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

  .planner-logo {
    margin-left: 10px;
  }

  .ig-profile-avatar {
    border-width: 2px;
    margin-left: 2px;
  }

  .v-list-item--nav {
    cursor: pointer;
    min-height: 56px !important;

    --v-activated-opacity: 0.05;

    .v-list-item {
      &-title {
        font-size: 23px;
        line-height: inherit;
      }

      &--active {
        .v-list-item-title {
          font-weight: 800;
        }
      }

      &__prepend {
        text-align: center;
        width: 68px;
        margin-right: 12px;

        svg {
          display: inline-block;
          zoom: 1.2;
          margin: 0 auto;
        }

        .v-icon {
          opacity: 1;
        }
      }

      &__content {
        overflow: inherit;
      }
    }
  }

  &.v-theme--light {
    svg {
      fill: black;
    }

    .ig-profile-avatar {
      border-color: black;
    }
  }

  &.v-theme--dark {
    svg {
      fill: white;
    }

    .ig-profile-avatar {
      border-color: white;
    }
  }
}
</style>
