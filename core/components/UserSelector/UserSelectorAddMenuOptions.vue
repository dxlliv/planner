<script setup lang="ts">
const userImportStore = useUserImportStore()

const emit = defineEmits(["openCreateProfileDialog"])

function onProfileImportFromFolder() {
  userImportStore.importFromDirectory("instagram")
}
</script>

<template>
  <v-list border :elevation="0">
    <v-list-item @click="emit('openCreateProfileDialog')">
      <v-list-item-title v-text="$t('common.actions.createProfile')" />
    </v-list-item>
    <v-divider />
    <v-list-item @click="onProfileImportFromFolder">
      <v-list-item-title v-text="$t('common.actions.importProfile')" />
    </v-list-item>
  </v-list>
</template>

<style scoped lang="scss"></style>