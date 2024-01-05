<script setup lang="ts">
import { SlickList, SlickItem, DragHandle } from 'vue-slicksort';

const props = defineProps<{
  user: any;
  mode: string
}>();

const gridListRef: Ref<HTMLElement | undefined> = ref()
const dragging = ref<boolean>(false)

function onListUpdated() {
  props.user.save()
}

function onSortStart() {
  dragging.value = true
}

function onSortEnd() {
  dragging.value = false
}
</script>

<template>
  <v-container class="ig-profile-page__media-grid-container px-0">
    <div
        :class="['ig-profile-page__media-grid', {'ig-profile-page__media-grid--dragging': dragging}]"
        ref="gridListRef"
    >
      <SlickList
          v-if="props.user.media[props.mode].length > 0"
          v-model:list="props.user.media[props.mode]"
          axis="xy"
          class="v-row"
          use-drag-handle
          :press-delay="100"
          :press-threshold="100"
          @sortStart="onSortStart"
          @sortEnd="onSortEnd"
          @update:list="onListUpdated"
      >
        <SlickItem
            v-for="(media, i) of props.user.media[props.mode]"
            :key="media.id" :index="i"
            class="ig-profile-page__media-grid__item v-col v-col-4"
        >
          <DragHandle class="ig-profile-page__media-grid__drag-handle">
            <v-icon icon="mdi-drag" color="white" />
          </DragHandle>

          <InstagramPost
              v-if="mode === 'posts'"
              :profile="user.profile"
              :media="media"
              context-menu
              detail-on-click
          />
          <InstagramPostReel
              v-if="mode === 'reels'"
              :profile="user.profile"
              :media="media"
              context-menu
          />
        </SlickItem>
      </SlickList>

      <v-card v-else :height="500">
        <InstagramMediaDropzone />
      </v-card>
    </div>
  </v-container>
</template>

<style lang="scss">
body > .ig-profile-page__media-grid__item {
  z-index: 999;
}

// override grid spacing
.ig-profile-page__media-grid-container .v-row {
  margin: -1.5px;
  @media(max-width: 600px) { margin: -1px; }

  & > .v-col {
    padding: 1.5px;
    @media(max-width: 600px) { padding: 1px; }
  }
}

.ig-profile-page__media-grid {
  &__drag-handle {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 8px;
    display: none;
    z-index: 5;
    cursor: grab;

    .v-icon {
      mix-blend-mode: difference;
    }
  }

  &--dragging * {
    cursor: grabbing !important;
  }

  .v-col {
    position: relative;

    &:hover {
      .ig-profile-page__media-grid__drag-handle {
        display: block;
      }
    }
  }
}
</style>