<script setup lang="ts">
import contenteditable from 'vue-contenteditable'

const props = defineProps<{
  user: IUser
}>();

const emit = defineEmits(['update'])

const usernameEditable = ref(props.user.profile.username ?? '')

function onFieldBlur() {
  props.user.profile.updateUsername(usernameEditable.value)
}
</script>

<template>
  <div class="ig-profile-page__header__username">
    <contenteditable
        tag="span"
        contenteditable spellcheck="false"
        v-model="usernameEditable" no-html no-nl
        @blur="onFieldBlur"
    />
    <v-icon v-if="user.profile.verified" icon="mdi-check-decagram" />
  </div>
</template>

<style scoped lang="scss">
.v-icon {
  font-size: 16px;
  color: rgb(0, 149, 246);
  margin-left: 3px;
  vertical-align: 0;
}
</style>