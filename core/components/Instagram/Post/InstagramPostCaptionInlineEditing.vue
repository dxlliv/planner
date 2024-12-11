<script setup lang="ts">
import contenteditable from "vue-contenteditable"

const props = defineProps<{
  caption: string
}>()

const emit = defineEmits(['update'])

const captionField = ref(props.caption)

watch(() => props.caption, value => {
  captionField.value = value
})

function onCaptionBlur() {
  emit('update', captionField.value)
}
</script>

<template>
  <span>
    <contenteditable
      tag="p"
      spellcheck="false"
      v-model="captionField"
      @blur="onCaptionBlur"
    />
  </span>
</template>

<style scoped lang="scss">
span :deep(p) {
  display: inline;
}
</style>
