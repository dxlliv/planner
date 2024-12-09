<script setup lang="ts">
const props = defineProps<{
  type: string
}>()

const mediaType = getMediaTypeIcon(props.type)
</script>

<template>
  <div class="dx-media__type">
    <component
      :is="mediaType.component"
      :class="mediaType.icon"
    />
  </div>
</template>

<style scoped lang="scss">

</style>