<script setup lang="ts">
const emit = defineEmits(['close'])

function onMediaCreate(blob: File) {
  emit('close')
}
</script>

<template>
  <v-dialog
      content-class="ig-media-create"
      :max-width="700"
      @close="emit('close')"
  >
    <v-card height="70vh">
      <v-card-title v-text="`Create new post`" />
      <MediaDropzone
          class="mx-4"
          :user="user"
          @add="onMediaCreate"
      />
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>