<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <NavigationItemList
    v-if="user.hasUnsavedChanges"
    :title="$t('navigation.save')"
    base-color="primary"
    @click="user.save()"
  >
    <template #icon>
      <IconSave />
    </template>
  </NavigationItemList>
</template>