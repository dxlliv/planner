<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <v-card flat class="py-0">
    <template #prepend>
      <InstagramUserAvatar
        :avatar="user.profile.avatar"
        :size="20" class="mr-1"
      />
    </template>
    <template #item>
      {{ user.profile.username }}
    </template>
  </v-card>
</template>

<style scoped lang="scss">

</style>