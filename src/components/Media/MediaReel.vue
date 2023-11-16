<script setup lang="ts">
defineProps<{
  media: IMediaVideo;
}>()
</script>

<template>
  <MediaVideo :media="media" />
</template>