<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <Layout :user="user">
    <InstagramNavigationDrawer :user="user" />

    <div id="drawer-editor" />

    <v-main>
      <v-sheet color="transparent" class="ig-page">
        <v-container class="px-1 py-sm-auto py-0">

          <slot />

        </v-container>
      </v-sheet>

      <MainFooter class="hidden-sm-and-down mt-1" />
    </v-main>
  </Layout>
</template>

<style scoped lang="scss">
.ig-page {
  width: 960px;
  max-width: 100%;
  margin: 0 auto;

  :deep(a) {
    color: #00376b;
  }

  &.v-theme--dark {
    :deep(a) {
      color: white;
    }
  }
}
</style>
