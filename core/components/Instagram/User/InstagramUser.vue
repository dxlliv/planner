<script setup lang="ts">
const props = defineProps<{
  user: any
}>()

const tab = ref(props.user.media.activeCollection)

function onCollectionChange(collectionName: string) {
  tab.value = collectionName

  props.user.media.setActiveCollection(collectionName)
}
</script>

<template>
  <InstagramUserProfile :user="user" />

  <InstagramUserTabs
    :media="user.media"
    :active="tab"
    @select="onCollectionChange"
  />

  <InstagramUserGrid
    :user="user"
    :collection="tab"
  />
</template>