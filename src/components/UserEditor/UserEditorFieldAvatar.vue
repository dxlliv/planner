<script setup lang="ts">
const props = defineProps<{
  user?: IUser
}>()

const emit = defineEmits(['update'])

const avatar: Ref<any> = ref(props.user ? props.user.profile.avatar : undefined)

const { files, open, reset, onChange } = useFileDialog({
  accept: 'image/jpg, image/jpeg, image/png',
  multiple: false
})

onChange(async (files: null | File[]) => {
  if (!files) return

  const file = files[0]

  // update preview
  avatar.value = {
    file: {
      blob: Promise.resolve(file)
    }
  }

  emit('update', file)
})
</script>

<template>
  <v-avatar class="cursor-pointer" variant="outlined" :size="64" @click="open">
    <v-icon v-if="!avatar" icon="mdi-account" />
    <UserSelectorAvatar v-else :avatar="avatar" :size="64" />
  </v-avatar>
</template>

<style scoped lang="scss">

</style>