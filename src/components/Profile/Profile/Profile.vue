<template>
  <div class="ig-profile-page">
    <v-container>
      <ProfileHeader
          :profile="profile"
      />

      <ProfileTabs
          :profile="profile"
          :active="tab"
          @select="(value: string) => (tab = value)"
      />

      <ProfileMedia
          v-if="profile.media"
          :profile="profile"
          :tab="tab"
      />

    </v-container>
  </div>
</template>

<script setup lang="ts">
const {profile} = defineProps<{
  profile: IProfile
}>()

const tab = ref("posts")
</script>

<style scoped lang="scss">
.ig-profile-page {
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
}
</style>
