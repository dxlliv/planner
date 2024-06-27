<script setup lang="ts">
defineProps<{
  create?: boolean
  edit?: boolean
}>()

const emit = defineEmits(["close"])
</script>

<template>
  <v-dialog
    :fullscreen="$vuetify.display.smAndDown"
    :max-width="700"
    @close="emit('close')"
  >
    <DialogContent
      :title="$t(create ? 'common.actions.createProfile' : 'common.actions.editProfile')"
      @back="emit('close')"
    >
      <slot />
    </DialogContent>
  </v-dialog>
</template>
