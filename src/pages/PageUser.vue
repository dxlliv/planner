<template>
  <LayoutInstagram>
    <InstagramUser
        v-if="user.ready"
        :user="user"
    />
  </LayoutInstagram>

  <ToolGuides v-if="extraOptions.guides" />
</template>

<script setup lang="ts">
import LayoutInstagram from "../layouts/LayoutInstagram.vue";

const route = useRoute();
const userStore = useUserStore();
const extraStore = useExtraStore();

const id: string = route.params.platform.toString() + '/' + route.params.username.toString();

const extraOptions = computed(() => extraStore.options);
const user = computed(() => userStore.user);

userStore.loadUserPage(id);
</script>
