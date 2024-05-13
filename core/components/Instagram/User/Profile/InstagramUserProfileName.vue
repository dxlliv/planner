<script setup lang="ts">
import contenteditable from "vue-contenteditable"

const props = defineProps<{
  user: IUser
}>()

const emit = defineEmits(["update"])

const nameEditable = ref(props.user.profile.name ?? "")

watch(() => props.user.profile.name, value => {
  nameEditable.value = value
})

function onFieldBlur() {
  props.user.profile.updateName(nameEditable.value)
}
</script>

<template>
  <contenteditable
    v-if="nameEditable"
    tag="p"
    class="ig-profile-page__header__name"
    contenteditable
    spellcheck="false"
    v-model="nameEditable"
    no-html
    no-nl
    @blur="onFieldBlur"
  />
</template>

<style scoped lang="scss">
.ig-profile-page__header__name {
  font-weight: bold;
  word-wrap: break-word;
}
</style>
