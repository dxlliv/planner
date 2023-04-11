<template>
  <div v-if="profile" class="igp-profile-page">
    <v-container>
      <ProfilePageHeader :profile="profile" />

      <ProfilePageTabs :profile="profile" :active="tab" @select="(value) => (tab = value)" />

      <ProfilePageMedia v-if="profile.media" :profile="profile" :mode="tab" />
    </v-container>
  </div>
</template>

<script setup lang="ts">
defineProps({
  profile: Object as () => IProfile
})

const tab = ref("posts")
</script>

<style scoped lang="scss">
.igp-profile-page {
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
}
</style>
