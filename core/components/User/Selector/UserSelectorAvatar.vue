<template>
  <div class="dx-profile-avatar__container">
    <v-avatar :size="size" class="dx-profile-avatar bg-background">
      <v-img v-if="src" :src="src" :key="avatarChangedTime" cover />
      <v-icon v-else-if="!$slots.default" icon="mdi-account" :size="44" />
      <slot name="inner" />
    </v-avatar>
    <slot />
  </div>
</template>

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

let avatar: any
let avatarChangedTime: Ref<number> = ref(0)

let src

if (props.avatar) {
  src = await handleMediaForSrc(props.avatar)

  // force refresh
  avatarChangedTime.value = +new Date()
}

watch(
  () => props.avatar,
  async (value) => {
    src = await handleMediaForSrc(props.avatar)

    // force refresh
    avatarChangedTime.value = +new Date()
  },
  { deep: true },
)
</script>

<style scoped lang="scss">
.dx-profile-avatar {
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  &__container {
    :deep(.v-avatar) {
      overflow: inherit;

      .v-img {
        border-radius: 50%;
        pointer-events: none;
      }

      .v-badge {
        position: absolute;
        top: 22px;
        right: 10px;

        &__badge {
          padding: 0;
        }
      }
    }
  }
}
</style>
