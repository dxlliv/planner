<script setup lang="ts">
import { useTheme } from "vuetify";

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

      <v-list density="comfortable">

        <v-list-item
            :title="$t('instagram.profile.menu.changeTheme')"
            @click="onChangeTheme"
        />

        <v-list-item
            v-if="!user.hasUnsavedChanges && user.hasLocalChanges"
            :title="$t('instagram.profile.export.title')"
            @click="dialogEditProfile = true"
        />

        <v-list-item
            :title="$t('instagram.profile.menu.settings')"
            @click="dialogEditProfile = true"
        />

      </v-list>
    </v-card>

    <UserEditorDialog
      edit v-model="dialogEditProfile"
      @close="dialogEditProfile = false"
    >
      <InstagramUserEditorForm
          :user="user"
          @close="dialogEditProfile = false"
      />
    </UserEditorDialog>

  </v-bottom-sheet>
</template>

<style scoped lang="scss">

</style>