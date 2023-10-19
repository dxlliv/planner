<template>
  <div class="ig-profile-feed__post__header">
    <v-row>
      <v-col class="flex-lg-shrink-0">
        <ProfileAvatar :size="32" :avatar="profile?.avatar"  />
      </v-col>
      <v-col class="flex-lg-shrink-1">
        {{profile.username}}
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  profile: IProfile
}>()
</script>

<style scoped lang="scss">

</style>