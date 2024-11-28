<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    avatar?: any
    size?: number
  }>(),
  {
    size: 120,
  },
)

let src

if (props.avatar) {
  src = await handleMediaForSrc(props.avatar)
}
</script>

<template>
  <ProfileAvatar
    :src="src" :size="size"
    class="ig-profile-avatar"
  />
</template>

<style scoped lang="scss">
.ig-profile-avatar {
  border: var(--plx-border);

  :deep(.v-avatar) {
    overflow: inherit;

    .v-badge {
      position: absolute;
      top: 22px;
      right: 10px;
    }
  }
}
</style>
