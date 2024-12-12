<script setup lang="ts">
defineProps<{user: IUser}>()

const emit = defineEmits(["close"])

function onMediaCreate() {
  emit("close")
}
</script>

<template>
  <v-dialog
    content-class="dx-media-create"
    :fullscreen="$vuetify.display.smAndDown"
    :max-width="700"
    height="60vh"
    @close="emit('close')"
  >
    <DialogContent
      :title="$t('profile.media.add.title')"
      @back="emit('close')"
    >
      <InstagramMediaDropzone
        class="mx-4"
        :user="user"
        @add="onMediaCreate"
      />
    </DialogContent>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
