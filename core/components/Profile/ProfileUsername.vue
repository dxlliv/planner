<script setup lang="ts">
withDefaults(
  defineProps<{
    username?: string
    size?: string
  }>(),
  {
    size: "small",
  },
)
</script>

<template>
  <span
    :class="[
      'app-profile__username',
      { 'font-weight-bold text-subtitle-2': size === 'medium' },
      { 'font-weight-bold text-subtitle-1': size === 'large' },
    ]"
  >
    <div v-if="username" v-text="username" />

    <slot />
  </span>
</template>

<style scoped lang="scss">
.app-profile__username {
  position: relative;

  &.text-subtitle-1 {
    font-size: 21px !important;
  }

  &.text-subtitle-2 {
    font-size: 19px !important;
  }

  :deep(a) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
