<script setup lang="ts">
const { user } = defineProps<{
  user: IUser
}>()

const emit = defineEmits(["edit"])

function onProfileRemove() {
  user.remove()
}

function onProfileReset() {
  user.reset()
}
</script>

<template>
  <v-menu
    content-class="ig-profile-selector__context-menu"
    activator="parent"
    transition="slide-y-transition"
    close-on-back
    :open-delay="5000"
    :offset="[7, 0]"
  >
    <v-list>
      <!--
      <v-list-item :href="user.profile.public_profile" target="_blank">
        <v-list-item-title>Open on Instagram</v-list-item-title>
      </v-list-item>
      -->
      <v-list-item @click="emit('edit')">
        <v-list-item-title
          v-text="$t('common.actions.editProfile')"
        />
      </v-list-item>

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
  </v-menu>
</template>

<style scoped lang="scss"></style>
