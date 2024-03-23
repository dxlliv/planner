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
  <v-sheet>
    <v-row no-gutters>
      <v-col class="flex-grow-0 pl-4 pr-0 py-0" align-self="center">
        <InstagramIconEmoji />
      </v-col>
      <v-col class="flex-grow-1">
        <v-textarea
          :placeholder="$t('instagram.profile.post.comment.add')"
          variant="solo" flat
          hide-details
          spellcheck="false"
          v-model="caption"
          @keydown.enter="onPressEnter"
        >
          <template v-slot:append>
            <v-btn
              class="mr-2" variant="flat"
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

.v-sheet.v-theme--dark {
  svg {
    fill: white;
  }
}

.v-input {
  :deep(textarea) {
    height: 32px;
    resize: none;
  }

  :deep(.v-input__append) {
    padding-top: 8px;
  }
}
</style>
