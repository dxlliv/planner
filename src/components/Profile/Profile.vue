<template>
  <v-sheet color="transparent" class="ig-profile-page">
    <v-container>
      <ProfileHeader :profile="profile" />

      <ProfileTabs
        :media="media"
        :active="tab"
        @select="(value: string) => (tab = value)"
      />

      <ProfileMediaGrid v-if="media" :media="media" :tab="tab" />
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
defineProps<{
  profile: IUserProfile;
  media: IUserMedia;
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
