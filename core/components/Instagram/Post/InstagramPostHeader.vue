<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <div class="ig-post-header px-4 py-3">
    <v-row>
      <v-col class="flex-grow-0">
        <InstagramUserAvatar :avatar="user.profile.avatar" :size="32" />
      </v-col>
      <v-col class="flex-grow-1 pl-1" align-self="center">
        <InstagramUserProfileUsername size="medium" :user="user" />
      </v-col>
      <v-col class="flex-grow-0">
        <slot />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.ig-post-header {
  :deep(.v-btn) {
    position: absolute;
    top: 4px;
    right: 4px;
  }
}
</style>
