<script setup lang="ts">
import { useTheme } from "vuetify"

defineProps<{
  user: IUser
}>()

const themeStore = useThemeStore()
const theme = useTheme()

const dialog = ref(false)
const dialogEditProfile = ref(false)

function onChangeTheme() {
  themeStore.toggleDarkTheme(theme)
}
</script>

<template>
  <v-bottom-sheet v-model="dialog" activator="parent">
    <v-card>
      <AppMenu>

        <v-list-item
          :title="$t('profile.menu.changeTheme')"
          @click="onChangeTheme"
        />

        <v-list-item
          v-if="!user.hasUnsavedChanges && user.hasLocalChanges"
          :title="$t('profile.export.title')"
          @click="dialogEditProfile = true"
        />

        <v-list-item
          :title="$t('profile.menu.settings')"
          @click="dialogEditProfile = true"
        />
      </AppMenu>
    </v-card>

    <UserEditorDialog
      edit
      v-model="dialogEditProfile"
      @close="dialogEditProfile = false"
    >
      <InstagramUserEditorForm
        :user="user"
        autosave
        @close="dialogEditProfile = false"
      />
    </UserEditorDialog>
  </v-bottom-sheet>
</template>

<style scoped lang="scss"></style>
