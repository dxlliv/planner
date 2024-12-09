<script setup lang="ts">
defineProps<{
  user: IUser
}>()

const extraStore = useExtraStore()
</script>

<template>
  <Layout :user="user">
    <NavigationDrawer :user="user" />

    <div id="drawer-editor" />

    <v-main class="dx-main">
      <v-sheet color="transparent" class="dx-page pb-13 pb-md-16">
        <v-container class="px-0 px-md-4 py-sm-auto py-0">

          <slot />

        </v-container>
      </v-sheet>

    </v-main>
  </Layout>
</template>

<style scoped lang="scss">
.dx-main {
  padding-bottom: 0;
}

.dx-page {
  width: 960px;
  max-width: 100%;
  margin: 0 auto;

  :deep(a) {
    color: inherit;
  }

  :deep(.dx-profile-page__header__website) {
    color: #00376b;
  }
}

:global(.v-application.v-theme--dark .dx-profile-page__header__website) {
  color: white;
}
</style>
