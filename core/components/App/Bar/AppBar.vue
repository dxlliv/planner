<script setup lang="ts">
const userStore = useUserStore()
const extraStore = useExtraStore()

onBeforeMount(() => {
  document.body.classList.add("app-bar--enabled")
})
</script>

<template>
  <v-app-bar
    :class="{'pl-9': extraStore.options.guides}"
    flat
  >
    <v-row no-gutters>
      <v-col class="flex-grow-0 text-left" align-self="center" style="min-width: 244px;">
        <Logo class="mx-4 mt-1" />
      </v-col>
      <v-col class="flex-grow-1 text-left" align-self="center">

        <v-breadcrumbs class="ma-0 px-2">
          <v-breadcrumbs-item
            v-for="user of userStore.userList"
            :to="user.route"
          >

            <AppBarUser :user="user" />

          </v-breadcrumbs-item>
        </v-breadcrumbs>

      </v-col>
      <v-col class="text-right text-overline px-4" align-self="center">

        <AppLanguageSwitcher class="text-grey" />
        <AppDateTime class="ms-2" />

      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style scoped lang="scss">
.v-app-bar {
  top: inherit !important;
  bottom: 0 !important;
  border-top: var(--plx-border);

  :deep(a) {
    text-decoration: none;
  }
}
</style>

<style lang="scss">
body.app-bar--enabled {
  .ig-navigation-drawer__list-bottom {
    bottom: 64px !important;
  }

  .v-layout {
    padding-bottom: 36px;
  }
}
</style>