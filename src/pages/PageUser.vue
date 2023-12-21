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

const route = useRoute();
const userStore = useUserStore();

const id: string = route.params.platform.toString() + '/' + route.params.username.toString();
const user = computed(() => userStore.user);

userStore.loadUserPage(id);
</script>
