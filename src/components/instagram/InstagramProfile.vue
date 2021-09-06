<template>
  <div class="instagram">
    <v-container>

      <InstagramProfileHeader
          v-if="profile?.details"
          :profile="profile.details"
      />

      <InstagramProfileMedia
          v-if="profile?.media"
          :media="profile.media"
      />

    </v-container>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {IProfile} from "~/../types";
import InstagramProfileHeader from "~/components/instagram/InstagramProfileHeader.vue"
import InstagramProfileMedia from "~/components/instagram/InstagramProfileMedia.vue";

defineProps({
  profile: Object as PropType<IProfile>
})
</script>

<style scoped lang="scss">
.instagram {
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
}
</style>