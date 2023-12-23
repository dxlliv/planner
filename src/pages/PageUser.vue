<template>
  <LayoutInstagram>
    <InstagramUser
        v-if="user.ready"
        :user="user"
    />
  </LayoutInstagram>
</template>

<script setup lang="ts">
import LayoutInstagram from "../layouts/LayoutInstagram.vue";

const config = useConfig();
const route = useRoute();
const userStore = useUserStore();

const routePlatform = route.params.platform

// get platform from route.params or from config (route platform param can be omitted)
const platform = routePlatform ? routePlatform.toString() : config.platform.default

const id: string = platform + '/' + route.params.username.toString();
const user = computed(() => userStore.user);

userStore.loadUserPage(id);
</script>
