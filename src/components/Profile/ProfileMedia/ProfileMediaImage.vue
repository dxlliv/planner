<template>
  <v-img
    class="ig-profile-media ig-profile-media--image"
    :src="media.file.path"
  />
</template>

<script setup lang="ts">
defineProps<{
  media: IProfileMediaImage;
}>();
</script>

<style scoped lang="scss"></style>
