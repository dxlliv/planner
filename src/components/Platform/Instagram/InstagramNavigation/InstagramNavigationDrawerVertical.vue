<script setup lang="ts">
defineProps<{
  user: IUser
  nav: any
}>()

const emit = defineEmits(['create', 'export'])
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
        <Logo :size="26" />
      </v-list-item>
    </v-list>

    <v-list density="compact" nav class="mt-2 mt-lg-0">

      <v-list-item title="Home" :to="{ name: 'index' }">
        <template #prepend>
          <InstagramIconHome />
        </template>
      </v-list-item>

      <v-list-item
          v-for="navItem of nav"
          v-bind="navItem.item"
      >
        <template #prepend>
          <InstagramIconSupport v-if="navItem.icon === 'IconSupport'" />
          <InstagramIconReadme v-if="navItem.icon === 'IconReadme'" />
          <InstagramIconDonors v-if="navItem.icon === 'IconDonors'" />
        </template>
      </v-list-item>

      <v-list-item title="Create" @click="emit('create')">
        <template #prepend>
          <InstagramIconNewPost />
        </template>
      </v-list-item>

      <v-list-item
          v-if="user.ready"
          title="Profile"
          :to="{ name: 'user', params: { platform: user.platform, username: user.profile.username } }"
      >
        <template #prepend>
          <suspense>
            <InstagramUserAvatar
                :avatar="user.profile.avatar"
                :size="26"
            />
          </suspense>
        </template>
      </v-list-item>
    </v-list>

    <v-list
        density="compact" nav
        class="ig-navigation-drawer__list-bottom"
    >
      <v-list-item
          v-if="user.hasLocalChanges"
          title="Export" base-color="primary"
          @click="emit('export')"
      >
        <template #prepend>
          <v-icon icon="mdi-pencil-ruler-outline" />
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss">
.ig-navigation-drawer {
  position: fixed !important;
  background: none !important;

  &.v-theme--light {
    .ig-profile-avatar {
      border-color: black;
    }
  }

  &.v-theme--dark {
    .ig-profile-avatar {
      border-color: white;
    }
  }

  .ig-navigation-drawer__list-bottom {
    position: absolute !important;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .ig-logo {
    margin-left: 10px;
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
}
</style>