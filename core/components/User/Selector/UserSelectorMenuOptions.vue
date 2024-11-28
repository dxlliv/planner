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
  <v-list :elevation="0">
    <v-list-item @click="emit('open')" target="_blank">
      <v-list-item-title v-text="$t('common.actions.openProfile')" />
    </v-list-item>

    <v-list-item
      v-if="isPlannerFeatureEnabled('profileEditor')"
      @click="emit('edit')"
    >
      <v-list-item-title v-text="$t('common.actions.editProfile')" />
    </v-list-item>

    <template
      v-if="!user.hasUnsavedChanges && user.hasLocalChanges"
    >
      <v-divider />
      <v-list-item
        :title="$t('instagram.navigation.export')"
        @click="emit('export')"
        base-color="primary"
      >
        <v-dialog :max-width="700" activator="parent">
          <InstagramUserExport :user="user" />
        </v-dialog>
      </v-list-item>
    </template>

    <template v-if="user.hasLocalChanges">
      <v-divider />
      <v-list-item
        v-if="user.isRemovable"
        @click="onProfileRemove()"
        class="text-red"
      >
        <v-list-item-title
          v-text="$t('common.actions.remove')"
        />
      </v-list-item>
      <v-list-item
        v-if="!user.isRemovable"
        @click="onProfileReset()"
        class="text-red"
      >
        <v-list-item-title
          v-text="$t('common.actions.reset')"
        />
      </v-list-item>
    </template>
  </v-list>
</template>