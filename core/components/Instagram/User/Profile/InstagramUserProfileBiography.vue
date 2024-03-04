<script setup lang="ts">
import contenteditable from "vue-contenteditable"

const props = defineProps<{
  biography: undefined | string
}>()

const emit = defineEmits(["update"])

const biographyEditable = ref(props.biography ?? "")

function onFieldBlur() {
  emit("update", biographyEditable.value)
}
</script>

<template>
  <contenteditable
    tag="p"
    class="ig-profile-page__header__biography"
    :contenteditable="isPlannerFeatureEnabled('profileEditor')"
    spellcheck="false"
    v-model="biographyEditable"
    :no-html="true"
    @blur="onFieldBlur"
  />
</template>

<style scoped lang="scss"></style>
