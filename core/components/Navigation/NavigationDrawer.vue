<script setup lang="ts">
defineProps<{
  user: IUser
}>()

const userMediaCreate = ref(false)
</script>

<template>
  <NavigationVertical
    v-if="$vuetify.display.mdAndUp"
    :user="user"
    @create="userMediaCreate = true"
  >

    <NavigationVerticalContent
      :user="user"
      @create="userMediaCreate = true"
    />

    <template v-slot:actions>
      <NavigationVerticalActions
        :user="user"
      />
    </template>

  </NavigationVertical>

  <NavigationDrawerHorizontal
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
.dx-navigation-drawer {
  position: fixed !important;
  background: none;

  .dx-navigation-drawer__list-bottom {
    position: absolute !important;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .planner-logo {
    margin-left: 10px;
  }

  .dx-profile-avatar {
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

      .dx-profile-avatar {
        zoom: 1.08;
        margin-left: 1px;
      }
    }
  }
}
</style>
