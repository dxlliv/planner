<template>
  <Profile v-if="profile" :profile="profile" />

  <ToolGuides v-if="extraOptions.guides" />
</template>

<script setup lang="ts">
const route = useRoute();
const userStore = useUserStore();
const profileStore = useProfileStore();
const extraStore = useExtraStore();

const username: string = route.params.username.toString();

const extraOptions = computed(() => extraStore.options);
const profile = computed(() => profileStore.profile);

userStore.loadUserPage(username);
</script>
