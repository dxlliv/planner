<template>
  <v-menu
      content-class="ig-profile-selector__context-menu"
      activator="parent"
      transition="slide-y-transition"
      :open-on-click="false"
      :open-delay="5000"
      :offset="[7, 0]"
  >
    <v-list>
      <v-list-item @click="emit('openCreateProfileDialog')">
        <v-list-item-title>Create profile</v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list-item @click="onProfileImportFromFolder">
        <v-list-item-title>Import from folder</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const userImportStore = useUserImportStore()

const emit = defineEmits(['openCreateProfileDialog'])

function onProfileImportFromFolder() {
  userImportStore.importFromDirectory()
}
</script>

<style scoped lang="scss">

</style>
