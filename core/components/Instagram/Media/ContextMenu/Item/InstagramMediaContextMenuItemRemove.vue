<script setup lang="ts">
const props = defineProps<{
  media: IMedia
}>()

const emit = defineEmits(["close"])

async function onMediaRemove() {
  await props.media.remove()

  emit("close")
}
</script>

<template>
  <v-list-item @click="onMediaRemove" class="text-red">
    <v-list-item-title
      v-text="$t('instagram.profile.menu.remove')"
    />
  </v-list-item>
</template>

<style scoped lang="scss"></style>
