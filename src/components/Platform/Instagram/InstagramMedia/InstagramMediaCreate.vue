<script setup lang="ts">
defineProps<{user: IUser}>()

const emit = defineEmits(["close"])

function onMediaCreate(blob: File) {
  emit("close")
}
</script>

<template>
  <v-dialog
    content-class="ig-media-create"
    :max-width="700"
    @close="emit('close')"
  >
    <DialogContent title="Create new post">
      <InstagramMediaDropzone
        class="mx-4"
        :user="user"
        @add="onMediaCreate"
      />
    </DialogContent>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
