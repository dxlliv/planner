<script setup lang="ts">
const { user } = defineProps<{
  user: IUser
}>()

const emit = defineEmits(["open", "edit"])

function onProfileRemove() {
  user.remove()
}

function onProfileReset() {
  user.reset()
}
</script>

<template>
  <v-list-item :href="user.profile.publicProfile" target="_blank">
    <v-row no-gutters>
      <v-col class="flex-grow-1">

        <v-list-item-title v-text="$t('common.actions.openInstagram')" />

      </v-col>
      <v-col class="flex-grow-0 pr-0" align-self="center">

        <a
          class="d-inline-block mr-n1 text-blue-grey-lighten-2"
          :href="user.profile.publicProfile"
          target="_blank"
        >
          <v-icon icon="mdi-arrow-top-right" size="14px" />
        </a>

      </v-col>
    </v-row>
  </v-list-item>

  <v-divider />

  <v-list-item @click="emit('open')">
    <v-list-item-title v-text="$t('common.actions.openProfile')" />
  </v-list-item>

  <v-list-item
    v-if="isPlannerFeatureEnabled('profileEditor')"
    @click="emit('edit')"
  >
    <v-list-item-title v-text="$t('common.actions.editProfile')" />
  </v-list-item>

  <template v-if="!user.hasUnsavedChanges && user.hasLocalChanges">
    <v-divider />
    <v-list-item
      :title="$t('navigation.export')"
      @click=""
      base-color="primary"
    >
      <v-dialog :max-width="700" activator="parent">
        <InstagramUserExport :user="user" />
      </v-dialog>
    </v-list-item>
  </template>

  <v-divider v-if="user.hasLocalChanges || user.isRemovable" />
  <v-list-item
    v-if="user.isRemovable"
    @click="onProfileRemove()"
    class="text-red"
  >
    <v-list-item-title v-text="$t('common.actions.remove')" />
  </v-list-item>
  <v-list-item
    v-if="!user.isRemovable && user.hasLocalChanges"
    @click="onProfileReset()"
    class="text-red"
  >
    <v-list-item-title v-text="$t('common.actions.reset')" />
  </v-list-item>
</template>
