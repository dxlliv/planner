<script setup lang="ts">
import contenteditable from "vue-contenteditable"

const props = defineProps<{
  user: IUser
}>()

const emit = defineEmits(["update"])

const biographyEditable = ref(props.user.profile.biography ?? "")

watch(() => props.user.profile.biography, value => {
  biographyEditable.value = value
})

function onFieldBlur() {
  emit("update", biographyEditable.value)
}
</script>

<template>
  <ProfileDescription>
    <contenteditable
      tag="p"
      class="dx-profile-page__header__biography"
      :contenteditable="isPlannerFeatureEnabled('profileEditor')"
      spellcheck="false"
      v-model="biographyEditable"
      :no-html="true"
      @blur="onFieldBlur"
    />
  </ProfileDescription>
</template>

<style scoped lang="scss"></style>
