<script setup lang="ts">
import contenteditable from "vue-contenteditable"

const props = withDefaults(
  defineProps<{
    user: IUser
    link?: boolean
    editable?: boolean
    size?: string
  }>(),
  {
    size: "medium",
  },
)

const emit = defineEmits(["update"])

const usernameEditable = ref(props.user.profile.username ?? "")

watch(() => props.user.profile.username, value => {
  usernameEditable.value = value
})

function onFieldBlur() {
  props.user.profile.updateUsername(usernameEditable.value)
}
</script>

<template>
  <div
    :class="[
      'ig-profile__header__username',
      { 'font-weight-bold text-subtitle-2': size === 'medium' },
      { 'font-weight-bold text-subtitle-1': size === 'large' },
    ]"
  >
    <contenteditable
      tag="span"
      :contenteditable="editable && isPlannerFeatureEnabled('profileEditor')"
      spellcheck="false"
      v-model="usernameEditable"
      no-html no-nl
      @blur="onFieldBlur"
    />
    <v-icon v-if="user.profile.verified" icon="mdi-check-decagram" />
    <router-link v-if="link" :to="user.route" />
  </div>
</template>

<style scoped lang="scss">
.ig-profile__header__username {
  position: relative;

  &.text-subtitle-1 {
    font-size: 20px !important;
  }

  :deep(a) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .v-icon {
    font-size: 16px;
    color: rgb(0, 149, 246);
    margin-left: 3px;
    vertical-align: 0;
  }
}
</style>
