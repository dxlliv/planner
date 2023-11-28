<script setup lang="ts">
const props = defineProps<{
  media: IMedia;
}>()

function onMediaRemove() {
  props.media.remove('posts')
  props.media.user.save()
}
</script>

<template>
  <v-menu
      content-class="ig-media__context-menu"
      transition="slide-y-transition"
      location="bottom"
      location-strategy="connected"
      target="parent" :offset="[-60, 0]"
  >
    <v-list density="compact" class="mx-3">
      <v-list-item @click="onMediaRemove()" class="text-red">
        <v-list-item-title>Remove</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped lang="scss">
.ig-media__context-menu {
  .v-list-item {
    min-height: 32px;

    &-title {
      font-size: 14px;
    }
  }
}
</style>