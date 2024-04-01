<script setup lang="ts">
defineProps<{
  user: IUser
  nav: any
}>()

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
    <v-list class="pt-7 pb-3 hidden-md-and-down">
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

      <v-list-item v-for="navItem of nav" v-bind="navItem.item">
        <template #prepend>
          <InstagramIconExplore v-if="navItem.icon === 'IconExplore'" />
          <InstagramIconMagnify v-if="navItem.icon === 'IconMagnify'" />
          <InstagramIconHeart v-if="navItem.icon === 'IconHeart'" />
        </template>
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
          <v-icon icon="mdi-content-save-outline" />
        </template>
      </v-list-item>

      <v-list-item
        v-if="!user.hasUnsavedChanges && user.hasLocalChanges"
        :title="$t('instagram.navigation.export')"
        @click="emit('export')"
      >
        <template #prepend>
          <v-icon icon="mdi-content-save-move-outline" />
        </template>

        <v-dialog :max-width="700" activator="parent">
          <InstagramUserExport :user="user" />
        </v-dialog>
      </v-list-item>

      <v-list-item
        v-if="isPlannerFeatureEnabled('requestDeluxe')"
        title="Deluxe"
      >
        <template #prepend>
          <v-icon icon="mdi-shimmer" />
        </template>

        <v-dialog :max-width="700" activator="parent">
          <MainDeluxe />
        </v-dialog>
      </v-list-item>

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
    color: black;
  }

  .ig-profile-avatar {
    border-width: 2px;
    margin-left: 2px;
  }

  .v-list-item--nav {
    cursor: pointer;
    margin-bottom: 8px !important;
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

    .planner-logo {
      color: white;
    }

    .ig-profile-avatar {
      border-color: white;
    }
  }
}
</style>
