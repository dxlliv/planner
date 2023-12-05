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
        <v-list-item-title>Edit profile</v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list-item @click="onProfileRemove()" class="text-red">
        <v-list-item-title>Remove</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const { user } = defineProps<{
  user: IUser;
}>();

const emit = defineEmits(['edit'])

const cannotBeRemoved = ref(false)

function onProfileRemove() {
  if (!user.isRemovable) {
    cannotBeRemoved.value = true
  }

  user.remove()
}
</script>

<style scoped lang="scss">

</style>
