<script setup lang="ts">
import { useDisplay } from "vuetify"
import { onLongPress } from "@vueuse/core"

const props = defineProps<{
  user: IUser
  media: IMedia
  contextMenu?: boolean
}>()

const display = useDisplay()
const postContainerRef = ref<HTMLElement | null>(null)
const postDetailDialog = ref(false)

function onPostClick() {
    if (display.smAndUp.value && !props.media.isEditing) {
    postDetailDialog.value = true
  }
}

onLongPress(
  postContainerRef,
  () => {
    if (!display.smAndUp.value) {
      postDetailDialog.value = true
    }
  },
  {
    modifiers: {
      prevent: true,
    },
  },
)

// keep postDetailDialog synced with media.isDetailView
watch(() => postDetailDialog.value, value => {
  const {baseURL} = useNuxtApp().$config.app

  props.media.setDetailView(value)

  if (!value) {
    history.pushState({}, "", `${baseURL.slice(0, -1)}${props.user.route}`);
  }
})

// keep media.isDetailView synced with postDetailDialog
watch(() => props.media.isDetailView, value => {
  postDetailDialog.value = value
})
</script>

<template>
  <div
    ref="postContainerRef"
    class="ig-post-container cursor-pointer"
    @click="onPostClick"
  >
    <InstagramMedia
      v-bind="$props"
    >
      <template
        v-if="isPlannerFeatureEnabled('mediaPage') && media.slug"
        v-slot:link
      >
        <PostLink :route="media.route" />
      </template>
    </InstagramMedia>

    <client-only>

      <v-dialog v-model="postDetailDialog">
        <InstagramPostDetail
          :media="media"
          :user="user"
        />
      </v-dialog>

    </client-only>
  </div>
</template>

<style scoped lang="scss">
@import "vuetify/lib/styles/settings/_variables";

.v-dialog {
  width: calc(100% - 64px - 24px);
  max-width: 960px;
  max-height: 913px;

  @media #{map-get($display-breakpoints, 'xs')} {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
}

.ig-post-container {
  width: 100%;
}
</style>
