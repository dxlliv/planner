<template>
  <ProfileSelector add @click="onProfileAdd">
    <ProfileAvatar>
      <v-icon size="48px" icon="mdi-plus" color="grey-lighten-1" />
    </ProfileAvatar>
  </ProfileSelector>
</template>

<script setup lang="ts">
async function onProfileAdd() {
}
</script>

<style scoped lang="scss">

</style>
