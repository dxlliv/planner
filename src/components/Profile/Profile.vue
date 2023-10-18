<template>
  <div class="igp-profile">
    <router-link
      :to="{
        name: 'profile',
        params: {
          username: profile.username
        }
      }"
    >
      <ProfileAvatar :size="120" :avatar="profile.avatar" />

      <h3 class="mt-4" v-text="profile.username" />
    </router-link>
    <a class="text-blue-grey-lighten-4" :href="`https://instagram.com/${profile.username}`" target="_blank">🡥</a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  profile: Object as () => IProfile
})
</script>

<style scoped lang="scss">
a {
  color: inherit;
  text-decoration: initial;
}
</style>
