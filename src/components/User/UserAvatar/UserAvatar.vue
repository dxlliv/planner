<template>
  <div class="ig-profile-avatar__container">
    <v-avatar :size="size" class="ig-profile-avatar">
      <v-img
          v-if="avatar"
          :src="avatar"
      />
      <slot name="inner" />
    </v-avatar>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  avatar?: any;
  size?: string
}>(), {
  size: '120px'
});

let avatar: any

if (props.avatar) {
  avatar = URL.createObjectURL(await props.avatar.file)
}
</script>

<style scoped lang="scss">
.ig-profile-avatar {
  user-select: none;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  &__container {
    :deep(.v-badge) {
      position: absolute;
      top: 28px;
      right: 8px;
    }
  }
}
</style>
