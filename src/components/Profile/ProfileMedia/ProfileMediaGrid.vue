<template>
  <SlickList
      v-if="props.user.media[props.mode].length > 0"
      v-model:list="props.user.media[props.mode]"
      axis="xy"
      class="v-row"
      :pressDelay="100"
  >
    <SlickItem
        v-for="(media, i) of props.user.media[props.mode]" :key="i" :index="i"
        class="v-col v-col-4"
    >
      <MediaPost v-if="mode === 'posts'" :media="media" />
      <MediaReel v-if="mode === 'reels'" :media="media" />
    </SlickItem>
  </SlickList>
</template>

<script setup lang="ts">
import { SlickList, SlickItem } from 'vue-slicksort';

const props = defineProps<{
  user: any;
  mode: string
}>();

watch(() => props.user.media[props.mode], listChanged => {
  props.user.setChanged(true)
})
</script>
