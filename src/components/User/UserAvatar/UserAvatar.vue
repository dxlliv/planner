<template>
  <v-avatar :size="size" class="ig-profile-avatar">
    <v-img
        v-if="avatar"
        :src="avatar"
    />
    <slot />
  </v-avatar>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  avatar: any;
  size?: string
}>(), {
  size: '120px'
});

const avatar = URL.createObjectURL(await props.avatar.file)
</script>

<style scoped lang="scss">
.ig-profile-avatar {
  user-select: none;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}
</style>
