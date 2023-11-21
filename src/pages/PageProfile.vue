<template>
  <Profile :profile="profile" />

  <ToolGuides v-if="extraOptions.guides" />
</template>

<script setup lang="ts">
const route = useRoute();
const userStore = useUserStore();
const extraStore = useExtraStore();

const username: string = route.params.username.toString();

const extraOptions = computed(() => extraStore.options);
const profile = computed(() => userStore.profile);

userStore.initializeUserPage(username);
</script>
