<template>
  <v-menu
      content-class="ig-profile-selector__context-menu"
      activator="parent"
      transition="slide-y-transition"
      close-on-back
      :open-delay="5000"
      :offset="[7, 0]"
  >
    <v-list>
      <v-list-item :href="profile.publicProfile" target="_blank">
        <v-list-item-title>Open on Instagram</v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list-item @click="onProfileRemove()" style="color: red;">
        <v-list-item-title>Remove</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const { profile } = defineProps<{
  profile: IProfile;
}>();

function onProfileRemove() {
  useConfigUserStore().unsetUserConfig(profile.username)
  useUserStore().unloadUserConfig(profile.username)
}
</script>

<style scoped lang="scss">

</style>
