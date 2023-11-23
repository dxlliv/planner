<template>
  <v-avatar :size="size" class="ig-profile-avatar">
    <v-img
        v-if="avatar"
        :src="avatar.data.file?.path"
    />
    <slot />
  </v-avatar>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  avatar?: IMediaAvatar;
  size?: string
}>(), {
  size: '120px'
});
</script>

<style scoped lang="scss">
.ig-profile-avatar {
  user-select: none;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}
</style>
