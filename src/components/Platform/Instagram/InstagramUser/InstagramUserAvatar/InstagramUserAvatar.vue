<script setup lang="ts">
const props = withDefaults(defineProps<{
  avatar?: any;
  size?: number,
}>(), {
  size: 120
});

let avatar: any
let avatarChangedTime: Ref<number> = ref(0)

if (props.avatar) {
  avatar = URL.createObjectURL(await props.avatar.file)
}

watch(() => props.avatar.file, async value => {
  avatar = URL.createObjectURL(await props.avatar.file)

  // force refresh
  avatarChangedTime.value = +new Date()
}, { deep: true })
</script>

<template>
  <v-avatar :size="size" class="ig-profile-avatar">
    <v-img
        v-if="avatar"
        :src="avatar"
        :key="avatarChangedTime"
        cover
    />
  </v-avatar>
</template>

<style scoped lang="scss">
.ig-profile-avatar {
  user-select: none;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  :deep(.v-avatar) {
    overflow: inherit;

    .v-img {
      border-radius: 50%;
    }

    .v-badge {
      position: absolute;
      top: 22px;
      right: 10px;
    }
  }
}
</style>
