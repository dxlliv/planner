<template>
  <UserSelector add @click="onProfileAdd">
    <UserAvatar>
      <v-icon size="48px" icon="mdi-plus" color="grey-lighten-1" />
      <v-tooltip activator="parent" location="bottom" :offset="[14, 0]">
        Import profile
      </v-tooltip>
    </UserAvatar>
  </UserSelector>
</template>

<script setup lang="ts">
const profileManagerStore = useProfileManagerStore()

async function onProfileAdd() {
  profileManagerStore.importProfile()


  //configUserStore.setUserConfig(config)
}
</script>

<style scoped lang="scss">

</style>
