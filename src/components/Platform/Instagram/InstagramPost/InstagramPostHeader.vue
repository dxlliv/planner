<script setup lang="ts">
defineProps<{
  profile: IUserProfile
}>()
</script>

<template>
  <div class="px-4 py-3">
    <v-row>
      <v-col class="flex-grow-0">
        <InstagramUserAvatar :avatar="profile.avatar" :size="32" />
      </v-col>
      <v-col class="flex-grow-1 pl-1" align-self="center">
        <InstagramUserProfileUsername size="medium" :profile="profile" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss"></style>
