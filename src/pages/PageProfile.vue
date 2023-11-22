<template>
  <Profile
      v-if="user"
      :user="user"
  />

  <ToolGuides v-if="extraOptions.guides" />
</template>

<script setup lang="ts">
const route = useRoute();
const userStore = useUserStore();
const extraStore = useExtraStore();

const username: string = route.params.username.toString();

const extraOptions = computed(() => extraStore.options);
const user = computed(() => userStore.user);

userStore.loadUserPage(username);
</script>
