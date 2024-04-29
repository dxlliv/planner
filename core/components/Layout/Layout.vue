<script setup lang="ts">
const props = defineProps<{
  user: IUser
}>()

const {t} = useI18n()
const extraStore = useExtraStore()

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

  <client-only v-if="extraStore.options.appBar">
    <AppBar />
  </client-only>
</template>

<style scoped lang="scss">

</style>