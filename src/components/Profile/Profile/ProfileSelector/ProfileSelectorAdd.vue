<template>
  <ProfileSelector add @click="onProfileAdd">
    <ProfileAvatar >
      <v-icon size="48px" icon="mdi-plus" color="grey-lighten-1" />
      <v-tooltip activator="parent" location="bottom" :offset="[14, 0]">
        Import profile
      </v-tooltip>
    </ProfileAvatar>
  </ProfileSelector>
</template>

<script setup lang="ts">
//const configUserStore = useConfigUserStore()

async function onProfileAdd() {




  //configUserStore.setUserConfig(config)
}
</script>

<style scoped lang="scss">

</style>
