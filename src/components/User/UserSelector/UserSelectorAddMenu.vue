<template>
  <v-menu
      v-model="menu"
      content-class="ig-profile-selector__context-menu"
      activator="parent"
      transition="slide-y-transition"
      close-on-back
      :open-delay="5000"
      :offset="[7, 0]"
  >
    <v-list>
      <v-list-item @click="onProfileCreate">
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
const emit = defineEmits(['toggle'])

const menu = ref(false)

watch(() => menu.value, value => {
  emit('toggle', value)
})

function onProfileCreate() {
  window.alert('Not implemented yet,\nedit the configuration.\n\nRead the docs for further info\ndxlliv.github.io/ig-planner/docs/')
}

function onProfileImportFromFolder() {
  userImportStore.importFromDirectory()
}
</script>

<style scoped lang="scss">

</style>
