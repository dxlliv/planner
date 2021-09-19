<template>
  <div class="instagram" v-if="profile?.details">
    <v-container>

      <InstagramProfileHeader
          :profile="profile.details"
      />

      <InstagramProfileTab
        @select="(value) => tab = value"
        :posts="profile?.details.stats.posts"
        :active="tab"
      />

      <InstagramProfileMedia
          v-if="profile?.media"
          :media="profile.media"
          :mode="tab"
      />

    </v-container>
  </div>
</template>

<script setup lang="ts">
import {PropType, ref} from "vue";
import {IProfile} from "~/../types";
import InstagramProfileHeader from "~/components/instagram/InstagramProfileHeader.vue"
import InstagramProfileTab from "~/components/instagram/InstagramProfileTab.vue";
import InstagramProfileMedia from "~/components/instagram/InstagramProfileMedia.vue";

defineProps({
  profile: Object as PropType<IProfile>
})

const tab = ref('posts')
</script>

<style scoped lang="scss">
.instagram {
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
}
</style>