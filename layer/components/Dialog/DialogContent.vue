<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  height: string
}>(), {
  height: '60vh'
})
</script>

<template>
  <v-card :height="height">
    <v-card-title v-if="title" v-text="title" />
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
.v-card-title {
  user-select: none;
}
</style>