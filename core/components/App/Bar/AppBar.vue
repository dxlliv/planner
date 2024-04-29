<script setup lang="ts">
const userStore = useUserStore()
const extraStore = useExtraStore()

onBeforeMount(() => {
  document.body.classList.add("app-bar--enabled")
})
</script>

<template>
  <v-app-bar
    :height="height"
    :class="{'pl-9': extraStore.options.guides}"
  >
    <v-row no-gutters>
      <v-col class="flex-grow-1 text-left">

        <v-breadcrumbs class="ma-0 pa-2">
          <v-breadcrumbs-item
            v-for="user of userStore.userList"
            class="pa-0"
            :to="user.route"
          >

            <AppBarUser :user="user" />

          </v-breadcrumbs-item>
        </v-breadcrumbs>

      </v-col>
      <v-col class="text-right px-4" align-self="center">

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