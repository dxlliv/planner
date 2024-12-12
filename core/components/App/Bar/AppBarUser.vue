<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <v-btn class="py-0 text-h6" size="large" flat>
    <template #prepend>
      <InstagramUserAvatar
        :avatar="user.profile.avatar"
        :size="40" class="mr-1"
      />
    </template>
    {{ user.profile.username }}
  </v-btn>
</template>

<style scoped lang="scss">

</style>