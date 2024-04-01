<script setup lang="ts">
const props = defineProps<{
  user: IUser
}>()

const {t} = useI18n()

function onUnsavedChanges(e: Event) {
  if (props.user.hasUnsavedChanges) {
    const answer = window.confirm(t('common.actions.unsavedChangesConfirm'))

    if (!answer) e.preventDefault();
  }
}

onMounted(() => {
  window.addEventListener("beforeunload", onUnsavedChanges);
})

onBeforeRouteLeave((e) => {
  if (props.user.hasUnsavedChanges) {
    onUnsavedChanges(e)
  }
})
</script>

<template>
  <v-layout>
    <slot />
  </v-layout>
</template>

<style scoped lang="scss">

</style>