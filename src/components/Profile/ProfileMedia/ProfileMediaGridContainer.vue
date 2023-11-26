<template>
  <v-container class="ig-profile-page__media-grid-container pt-1 px-0">
    <ProfileMediaGrid
        :user="user"
        :mode="tab"
    />
  </v-container>
</template>

<script setup lang="ts">
defineProps<{
  user: any;
  tab: string;
}>();
</script>

<style lang="scss">
.ig-profile-page__media-grid-container .v-row {
  margin: -1.5px !important;

  @media(max-width: 600px) {
    margin: -1px !important;
  }

  & > .v-col {
    padding: 1.5px !important;

    @media(max-width: 600px) {
      padding: 1px !important;
    }
  }
}
</style>
