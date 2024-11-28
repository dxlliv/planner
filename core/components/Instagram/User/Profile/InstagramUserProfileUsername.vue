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
  <ProfileUsername
    :size="size"
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
    <InstagramUserProfileVerified
      v-if="user.profile.verified"
    />
    <router-link v-if="link" :to="user.route" />
  </ProfileUsername>
</template>

<style scoped lang="scss">
.ig-profile__header__username {
  position: relative;

  :deep(a) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
