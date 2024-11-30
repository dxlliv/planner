<script setup lang="ts">
const props = defineProps<{
  user: any
}>()

const tab = ref(props.user.media.activeCollection)

const tabs: ComputedRef<{ name: string; label: string; icon: string }[]> =
  computed(() => {
    let items = [
      {
        name: "posts",
        label: "Posts",
        icon: "mdi-grid",
      },
    ]

    if (
      props.user.media.hasCollection("reels") &&
      props.user.media.collections.reels.length > 0
    ) {
      items.push({
        name: "reels",
        label: "Reels",
        icon: "mdi-play-box-multiple-outline",
      })
    }

    return items
  })

function onCollectionChange(collection: any) {
  tab.value = collection.name

  props.user.media.setActiveCollection(collection.name)
}
</script>

<template>
  <InstagramUserProfile :user="user" />

  <ProfileTabList
    :tabs="tabs"
    :media="user.media"
    :active="tab"
    @select="onCollectionChange"
  />

  <InstagramUserGrid
    :user="user"
    :collection="tab"
  />
</template>