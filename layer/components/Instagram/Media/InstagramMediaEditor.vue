<script setup lang="ts">
import { PinturaEditor, PinturaEditorModal, PinturaEditorOverlay } from "@pqina/vue-pintura";
import { getEditorDefaults } from "@pqina/pintura";

const props = defineProps<{
  media: IMedia
}>()

const editorProps = getEditorDefaults({
  enableButtonClose: true,
})

const src = await handleMediaForSrc(props.media)

function handleProcess(event) {
  props.media.setMediaImage(event.detail.dest)
  props.media.setEditing(false)
  props.media.setUniqueId()
}

function onDrawerModelValueChange(value) {
  if (!value) {
    props.media.setEditing(false)
  }
}
</script>

<template>
  <Teleport to="#drawer-editor">
    <v-navigation-drawer
      :width="500"
      :rail-width="500"
      touchless
      :model-value="true"
      :disable-resize-watcher="true"
      :elevation="0"
      class="ig-navigation-drawer-editor"
      @update:modelValue="onDrawerModelValueChange"
    >
      <PinturaEditor
        v-bind="editorProps"
        :src="src"
        @pintura:process="handleProcess($event)"
        @pintura:close="media.setEditing(false)"
        @contextmenu.stop
      />
    </v-navigation-drawer>
  </Teleport>
</template>

<style scoped lang="scss">
@import "vuetify/lib/styles/settings/_variables";

#drawer-editor {
  .v-navigation-drawer__scrim {
    background: transparent !important;
    opacity: 1 !important;
  }
}

.ig-navigation-drawer-editor {
  position: fixed !important;
  height: 100vh !important;

  @media #{map-get($display-breakpoints, 'xs')} {
    min-width: 100vw !important;
    height: inherit !important;
  }
}

.PinturaRootWrapper {


  /*
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;

  @media(min-width: 1280px) {
    width: calc(180%);
    height: calc(160%);
    z-index: 999;
    margin: -30% 0 0 -40%;
    border: 1px solid black;
  }
   */
}
</style>
