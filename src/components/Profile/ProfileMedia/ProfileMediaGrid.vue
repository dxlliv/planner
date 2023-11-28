<script setup lang="ts">
import { SlickList, SlickItem } from 'vue-slicksort';

const props = defineProps<{
  user: any;
  mode: string
}>();

const gridListRef: Ref<HTMLElement | undefined> = ref()

function onListUpdated() {
  props.user.save()
}
</script>

<template>
  <div
      class="ig-profile-page__media-grid"
      ref="gridListRef"
  >
      <SlickList
          v-if="props.user.media[props.mode].length > 0"
          v-model:list="props.user.media[props.mode]"
          axis="xy"
          class="v-row"
          :pressDelay="100"
          @update:list="onListUpdated"
      >
        <SlickItem
            v-for="(media, i) of props.user.media[props.mode]"
            :key="media.id" :index="i"
            class="v-col v-col-4"
        >
          <MediaPost v-if="mode === 'posts'" :media="media" />
          <MediaReel v-if="mode === 'reels'" :media="media" />
        </SlickItem>
      </SlickList>
  </div>
</template>

<style scoped lang="scss">
.v-col {
  z-index: 999;
}
</style>