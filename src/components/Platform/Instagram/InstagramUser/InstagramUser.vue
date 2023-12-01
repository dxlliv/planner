<template>
  <v-sheet color="transparent" class="ig-profile-page">
    <v-container class="py-0">
      <InstagramUserProfile :user="user" />

      <InstagramUserTabs
        :media="user.media"
        :active="tab"
        @select="(value: string) => (tab = value)"
      />

      <InstagramUserMediaGrid
          :user="user"
          :mode="tab"
      />
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
defineProps<{
  user: any;
}>();

const tab = ref("posts");
</script>

<style lang="scss">
.ig-profile-page {
  width: 960px;
  max-width: 100%;
  margin: 0 auto;

  a {
    color: #00376b;
  }

  &.v-theme--dark {
    a {
      color: white;
    }
  }
}
</style>
