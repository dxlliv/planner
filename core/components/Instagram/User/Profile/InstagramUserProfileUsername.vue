<script setup lang="ts">
import contenteditable from "vue-contenteditable"

const props = withDefaults(
  defineProps<{
    profile: IUserProfile
    editable?: boolean
    size?: string
  }>(),
  {
    size: "medium",
  },
)

const emit = defineEmits(["update"])

const usernameEditable = ref(props.profile.username ?? "")

function onFieldBlur() {
  props.profile.updateUsername(usernameEditable.value)
}
</script>

<template>
  <div
    :class="[
      'ig-profile__header__username',
      { 'font-weight-bold text-subtitle-2': size === 'medium' },
    ]"
  >
    <contenteditable
      tag="span"
      :contenteditable="editable"
      spellcheck="false"
      v-model="usernameEditable"
      no-html
      no-nl
      @blur="onFieldBlur"
    />
    <v-icon v-if="profile.verified" icon="mdi-check-decagram" />
  </div>
</template>

<style scoped lang="scss">
.ig-profile-username {
  .v-icon {
    font-size: 16px;
    color: rgb(0, 149, 246);
    margin-left: 3px;
    vertical-align: 0;
  }
}
</style>
