<script setup lang="ts">
const {t} = useI18n()
const plannerConfig = usePlannerConfig()

defineProps<{
  user: IUser
}>()

const userMediaCreate = ref(false)
</script>

<template>
  <InstagramNavigationDrawerVertical
    v-if="$vuetify.display.mdAndUp"
    :user="user"
    @create="userMediaCreate = true"
  />

  <InstagramNavigationDrawerHorizontal
    v-else
    :user="user"
    @create="userMediaCreate = true"
  />

  <InstagramMediaCreate
    :user="user"
    v-model="userMediaCreate"
    @close="userMediaCreate = false"
  />
</template>

<style scoped lang="scss">
.ig-navigation-drawer {
  position: fixed !important;
  background: none;

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
}
</style>
