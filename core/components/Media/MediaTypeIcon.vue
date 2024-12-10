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
:deep(.v-icon) {
  @media(max-width: 599px) {
    font-size: 16px;
    margin-top: -4px;
    margin-right: -4px;
  }
}
</style>