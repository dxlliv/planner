<template>
  <div>
    <router-link :to="{ name: 'profile', params: { username: profile.fields.username } }">
      <v-avatar :size="120">
        <v-img :src="profile.fields.avatar" />
      </v-avatar>

      <h3 class="mt-4" v-text="profile.fields.username" />
    </router-link>
    <a
      class="text-blue-grey-lighten-4" :href="`https://instagram.com/${profile.fields.username}`"
      target="_blank"
    >🡥</a>
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
    text-decoration: initial
}
</style>