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
  <v-dialog v-model="dialog" fullscreen activator="parent">
    <v-card>

      <div class="px-6 py-7">
        <v-row>
          <v-col class="flex-grow-1 pa-0" align-self="center">
            <InstagramUserProfileUsername
                :user="user"
                size="large"
            />
          </v-col>
          <v-col class="flex-grow-0 pa-0" align-self="center">
            <v-btn class="mr-n5" rounded flat @click="dialog = false">
              <v-icon icon="mdi-close" />
            </v-btn>
          </v-col>
        </v-row>
      </div>


      <v-divider />

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

    <UserEditorDialog edit v-model="dialogEditProfile">
      <InstagramUserEditorForm
          :user="user"
          @close="dialogEditProfile = false"
      />
    </UserEditorDialog>

  </v-dialog>
</template>

<style scoped lang="scss">

</style>