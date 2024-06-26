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
    :width="244"
    :rail-width="72"
  >
    <v-list v-if="!extraStore.options.appBar" class="pt-7 pb-1 hidden-md-and-down">
      <v-list-item>
        <Logo />
      </v-list-item>
    </v-list>

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
            <InstagramUserAvatar :avatar="user.profile.avatar" :size="26" />
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

      <!--
      <v-list-item
        v-if="isPlannerFeatureEnabled('requestDeluxe')"
        title="Deluxe"
      >
        <template #prepend>
          <v-icon icon="mdi-shimmer" />
        </template>

        <v-dialog :max-width="700" activator="parent">
          <AppDeluxe />
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
    margin-top: 8px !important;
    min-height: 50px !important;

    --v-activated-opacity: 0.05;

    .v-list-item {
      &-title {
        font-size: 16px;
        font-weight: 300;
      }

      &--active {
        .v-list-item-title {
          font-weight: 800;
        }
      }

      &__prepend {
        width: 32px;
        margin-left: 5px;
        margin-right: 10px;

        svg {
          margin-left: 3px;
        }

        .v-icon {
          opacity: 1;
        }
      }
    }

    &:hover {
      svg {
        zoom: 1.08;
        margin-left: 2px;
      }
      .ig-profile-avatar {
        zoom: 1.08;
        margin-left: 1px;
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
