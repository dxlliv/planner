<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    avatar?: any
    size?: number
    border?: boolean
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
    :class="['dx-profile-avatar', {'dx-profile-avatar--border': border}]"
  />
</template>

<style scoped lang="scss">
.dx-profile-avatar {
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  &--border {
    border-width: 2px;
    border-color: rgba(var(--v-border-color), 1);
  }

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
