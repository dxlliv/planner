<template>
  <div v-if="profile" class="instagram-profile">
    <v-container>

      <InstagramProfileHeader
          :profile="profile"
      />

      <InstagramProfileTabs
        @select="(value) => tab = value"
        :profile="profile"
        :active="tab"
      />

      <InstagramProfileMedia
          v-if="profile.media"
          :profile="profile"
          :mode="tab"
      />

    </v-container>
  </div>
</template>

<script setup lang="ts">
import InstagramProfileHeader from "~/components/Profile/ProfilePage/ProfilePageHeader.vue"
import InstagramProfileTabs from "~/components/Profile/ProfilePage/ProfilePageTabs.vue";
import InstagramProfileMedia from "~/components/Profile/ProfilePage/ProfilePageMedia.vue";

defineProps({
  profile: Object as () => IProfile
})

const tab = ref('posts')
</script>

<style scoped lang="scss">
.instagram-profile {
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
}
</style>