<script setup lang="ts">
import UserImporter from "£/lib/user/userImporter.class"

const userStore = useUserStore()
const userStorageStore = useUserStorageStore()

const emit = defineEmits(["openCreateProfileDialog"])

async function onProfileImportFromFolder() {
  const userImporter = new UserImporter('instagram')

  const rawUser: IRawUser = await userImporter.importFromDirectory()

  const user = await userStore.loadUser(rawUser)

  await user.loadUserClient()
  await user.save()

  userStorageStore.addUserToStorageIndex({
    username: user.raw.profile.username,
    platform: 'instagram'
  })
}
</script>

<template>
  <v-list-item @click="emit('openCreateProfileDialog')">
    <v-list-item-title v-text="$t('common.actions.createProfile')" />
  </v-list-item>
  <v-list-item @click="onProfileImportFromFolder">
    <v-list-item-title v-text="$t('common.actions.importProfile')" />
  </v-list-item>
</template>

<style scoped lang="scss"></style>