<template>
  <div class="ig-profile">
    <router-link
      :to="{
        name: 'profile',
        params: {
          username: profile.username,
        },
      }"
    >
      <ProfileAvatar size="120px" :avatar="profile.avatar" />

      <h3 class="mt-4" v-text="profile.username" />
    </router-link>
    <a
      class="text-blue-grey-lighten-4"
      :href="`https://instagram.com/${profile.username}`"
      target="_blank"
      >🡥</a
    >
  </div>
</template>

<script setup lang="ts">
const { profile } = defineProps<{
  profile: IProfile;
}>();
</script>

<style scoped lang="scss">
.ig-profile {
  display: inline-block;
  text-align: center;
  margin: 0 32px;

  a {
    color: inherit;
    text-decoration: initial;
  }
}
</style>
