<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    user: IUser
    size?: number
  }>(),
  {
    size: 120,
  },
)

const { files, open, reset, onChange } = useFileDialog({
  accept: "image/jpg, image/jpeg, image/png",
  multiple: false,
})

onChange(async (files: null | File[]) => {
  if (!files) return

  const file = files[0]

  await props.user.profile.updateAvatar(file)
})
</script>

<template>
  <suspense>
    <InstagramUserAvatar
      @dblclick="open"
      :avatar="user.profile.avatar"
      :size="size"
    />
  </suspense>
</template>

<style scoped lang="scss"></style>
