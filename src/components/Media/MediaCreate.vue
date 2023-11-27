<script setup lang="ts">
const userStore = useUserStore()

const emit = defineEmits(['update:modelValue'])
const user = computed(() => userStore.user);

function onMediaCreate(blob: File) {
  user.value.media.addMedia({ type: 'image', file: blob }, 'posts', 'unshift')
  user.value.saveChanges()

  emit('update:modelValue', false)
}
</script>

<template>
  <v-dialog
      content-class="ig-media-create"
      :max-width="700"
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