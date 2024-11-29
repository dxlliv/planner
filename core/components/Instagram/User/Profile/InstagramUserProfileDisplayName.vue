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
  <ProfileDisplayName
    class="ig-profile-page__header__display-name"
  >
    <contenteditable
      v-if="nameEditable"
      tag="p"
      contenteditable
      spellcheck="false"
      v-model="nameEditable"
      no-html
      no-nl
      @blur="onFieldBlur"
    />
  </ProfileDisplayName>
</template>

<style scoped lang="scss">

</style>
