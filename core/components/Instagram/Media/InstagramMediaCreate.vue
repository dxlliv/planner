<script setup lang="ts">
defineProps<{user: IUser}>()

const emit = defineEmits(["close"])

function onMediaCreate() {
  emit("close")
}
</script>

<template>
  <v-dialog
    content-class="ig-media-create"
    :fullscreen="$vuetify.display.smAndDown"
    :max-width="700"
    @close="emit('close')"
  >
    <DialogContent
      :title="$t('instagram.profile.media.add.title')"
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
