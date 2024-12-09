<script setup lang="ts">
const caption = ref('')

const props = defineProps<{
  media: IMedia
}>()

function onCaptionSet() {
  props.media.setCaption(caption.value)

  // clear input
  caption.value = ''
}

function onPressEnter(e) {
  if (!e.shiftKey) {
    e.preventDefault()
    onCaptionSet()
  }
}
</script>

<template>
  <v-sheet color="transparent">
    <v-row no-gutters>
      <v-col class="flex-grow-0 pl-4 pr-0 py-0" align-self="center">
        <InstagramIconEmoji />
      </v-col>
      <v-col class="flex-grow-1" align-self="center">
        <v-textarea
          :placeholder="$t('profile.post.comment.add')"
          variant="solo" flat bg-color="transparent"
          hide-details
          spellcheck="false"
          v-model="caption"
          @keydown.enter="onPressEnter"
        >
          <template v-slot:append>
            <v-btn
              class="mt-1 mr-2" variant="flat" bg-color="transparent"
              :text="$t('common.actions.post')"
              @click="onCaptionSet"
            />
          </template>
        </v-textarea>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style scoped lang="scss">
svg {
  margin-top: 5px;
}

.v-sheet {
  overflow: hidden;

  &.v-theme--dark {
    svg {
      fill: white;
    }
  }
}

.v-btn {
  background: transparent !important;
}

.v-input {

  :deep(textarea) {
    height: 32px;
    margin-top: 2px;
    resize: none;
  }

  :deep(.v-input__append) {
    padding-top: 8px;
  }
}
</style>
