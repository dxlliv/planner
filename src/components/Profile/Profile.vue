<template>
  <div class="igp-profile">
    <router-link
      :to="{
        name: 'profile',
        params: {
          username: profile?.fields.username
        }
      }"
    >
      <ProfileAvatar :size="120" :src="profile?.avatar?.path" />

      <h3 class="mt-4" v-text="profile?.fields.username" />
    </router-link>
    <a class="text-blue-grey-lighten-4" :href="`https://instagram.com/${profile.fields.username}`" target="_blank">🡥</a>
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
