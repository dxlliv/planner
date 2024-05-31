<script setup lang="ts">
defineProps<{
  create?: boolean
  edit?: boolean
}>()

const emit = defineEmits(["close"])
</script>

<template>
  <v-dialog
    :max-width="700"
    @close="emit('close')"
  >
    <v-card>
      <v-card-title v-text="$t(create ? 'common.actions.createProfile' : 'common.actions.editProfile')" />

      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
