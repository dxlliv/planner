<script setup lang="ts">
defineProps<{
  title: string
}>()

const emit = defineEmits(["close"])
</script>

<template>
  <v-dialog
    content-class="ig-user-export"
    :max-width="700"
    @close="emit('close')"
  >
    <v-card>
      <v-card-title v-text="title" />

      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
