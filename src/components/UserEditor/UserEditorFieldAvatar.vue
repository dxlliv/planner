<script setup lang="ts">
const emit = defineEmits(['update'])

const { files, open, reset, onChange } = useFileDialog({
  accept: 'image/jpg, image/jpeg, image/png',
  multiple: false
})

onChange(async (files: null | File[]) => {
  if (!files) return

  const file = files[0]

  avatar.value = await handleMediaForSrc({
    file: {
      blob: Promise.resolve(file)
    }
  })

  emit('update', file)
})

const avatar: Ref<any> = ref(undefined)
</script>

<template>
  <v-avatar class="cursor-pointer" variant="outlined" :size="64" @click="open">
    <v-icon v-if="!avatar" icon="mdi-account" />
    <v-img v-else :src="avatar" />
  </v-avatar>
</template>

<style scoped lang="scss">

</style>