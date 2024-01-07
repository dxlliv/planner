<script setup lang="ts">
import { useDisplay } from "vuetify";
import { onLongPress } from '@vueuse/core'

defineProps<{
  profile: IUserProfile;
  media: IMedia;
  collection?: IMediaCollection;
  contextMenu?: boolean
  detailOnClick?: boolean
}>()

const display = useDisplay()
const postContainerRef = ref<HTMLElement | null>(null)
const postDetailDialog = ref(false)

function onPostClick() {
  if (display.smAndUp.value) {
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
      prevent: true
    }
  }
)
</script>

<template>
  <div
    ref="postContainerRef"
    class="ig-post-container cursor-pointer"
    @click="onPostClick"
  >

    <InstagramMedia
      v-bind="$props"
    />

    <v-dialog v-model="postDetailDialog">
      <InstagramPostDetail
        :media="media"
        :profile="profile"
      />
    </v-dialog>

  </div>
</template>

<style scoped lang="scss">
.v-dialog {
  max-width: calc(100% - 64px - 64px);
  max-height: 913px;
}

.ig-post-container {
  width: 100%;
}
</style>