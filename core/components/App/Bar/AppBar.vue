<script setup lang="ts">
const userStore = useUserStore()
const extraStore = useExtraStore()

onBeforeMount(() => {
  document.body.classList.add("dx-bar--enabled")
})
</script>

<template>
  <v-app-bar
    :class="{'pl-9': extraStore.options.guides}"
    flat :height="80"
  >
    <v-row no-gutters>
      <v-col class="flex-grow-0 text-left" align-self="center" style="min-width: 244px;">
        <AppLogo to="/" title="Planner" class="mx-8 mt-1" />
      </v-col>
      <v-col class="flex-grow-1 text-left" align-self="center">

        <v-breadcrumbs class="ma-0 px-4">
          <v-breadcrumbs-item
            v-for="user of userStore.userList"
            :to="user.route"
          >

            <AppBarUser :user="user" />

          </v-breadcrumbs-item>
        </v-breadcrumbs>

      </v-col>
      <v-col class="text-right text-overline px-8" align-self="center">

        <AppLanguageSwitcher class="text-grey" />
        <AppBarDateTime class="ms-4" />

      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style scoped lang="scss">
.v-app-bar {
  top: inherit !important;
  bottom: 0 !important;
  border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  :deep(a) {
    text-decoration: none;
  }

  .dx-logo {
    font-size: 44px;
  }
}
</style>

<style lang="scss">
.dx-navigation-drawer__list-bottom {
  bottom: 80px !important;
}
body.dx-bar--enabled {
  .dx-navigation-drawer__actions {
    padding-bottom: 80px;
  }

  .v-layout {
    padding-bottom: 80px;
  }
}
</style>