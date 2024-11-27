<script setup lang="ts">
defineProps<{
  user: IUser
}>()

const extraStore = useExtraStore()
</script>

<template>
  <Layout :user="user">
    <InstagramNavigationDrawer :user="user" />

    <div id="drawer-editor" />

    <v-main class="ig-main">
      <v-sheet color="transparent" class="ig-page pb-8 pb-md-16">
        <v-container class="px-1 py-sm-auto py-0">

          <slot />

        </v-container>
      </v-sheet>

    </v-main>
  </Layout>
</template>

<style scoped lang="scss">
.ig-main {
  padding-bottom: 0;
}

.ig-page {
  width: 960px;
  max-width: 100%;
  margin: 0 auto;

  :deep(a) {
    color: inherit;
  }

  :deep(.ig-profile-page__header__website) {
    color: #00376b;
  }
}

:global(.v-application.v-theme--dark .ig-profile-page__header__website) {
  color: white;
}
</style>
