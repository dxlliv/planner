<script setup lang="ts">
import { SlickList, SlickItem, DragHandle } from "vue-slicksort"

const props = defineProps<{
  user: any
  collection: string
}>()

const appStore = useAppStore()
const gridListRef: Ref<HTMLElement | undefined> = ref()
const dragging = ref<boolean>(false)

function onListUpdated() {
  props.user.setUnsavedChanges(true)
}

function onSortStart() {
  dragging.value = true
  appStore.setDisableScroll(true)
}

function onSortEnd() {
  dragging.value = false
  appStore.setDisableScroll(false)
}
</script>

<template>
  <v-container class="ig-profile-page__grid-container px-0">
    <div
      :class="[
        'ig-profile-page__grid',
        { 'ig-profile-page__grid--dragging': dragging },
      ]"
      ref="gridListRef"
    >
      <SlickList
        v-if="user.media.collections[collection].length > 0"
        v-model:list="props.user.media.collections[collection]"
        axis="xy"
        class="v-row"
        :use-drag-handle="$vuetify.display.mdAndUp"
        :press-delay="200"
        :press-threshold="100"
        @sortStart="onSortStart"
        @sortEnd="onSortEnd"
        @update:list="onListUpdated"
      >
        <SlickItem
          v-for="(media, i) of user.media.collections[collection]"
          :key="media.id"
          :index="i"
          class="ig-profile-page__grid__item v-col v-col-4"
        >
          <template v-if="isPlannerFeatureEnabled('mediaSort')">
            <DragHandle class="ig-profile-page__grid__drag-handle">
              <v-icon icon="mdi-drag" color="white" />
            </DragHandle>
          </template>

          <InstagramPost
            :user="user"
            :media="media"
            context-menu
          />
        </SlickItem>
      </SlickList>

      <v-card v-else :height="500" flat :elevation="0">
        <InstagramMediaDropzone :user="user" />
      </v-card>
    </div>
  </v-container>
</template>

<style lang="scss">
body > .ig-profile-page__grid__item {
  z-index: 999;
}

// override grid spacing
.ig-profile-page__grid-container .v-row {
  margin: -1.5px;

  @media (max-width: 600px) {
    margin: -1px;
  }

  & > .v-col {
    padding: 2px;

    @media (max-width: 600px) {
      padding: 1px;
    }
  }
}

.ig-profile-page__grid {
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
      .ig-profile-page__grid__drag-handle {
        display: block;
      }
    }
  }
}
</style>
