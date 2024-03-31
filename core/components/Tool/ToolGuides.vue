<template>
  <div class="tool-guides">
    <Guides type="horizontal" oncontextmenu="return false" />
    <Guides type="vertical" oncontextmenu="return false" />
  </div>
</template>

<script setup lang="ts">
import Guides from "vue3-guides"

// add body class for extra v-application padding
onBeforeMount(() => {
  document.body.classList.add("tool-guides--enabled")
})
</script>

<style lang="scss">
body.tool-guides--enabled {
  .v-application__wrap {
    padding-top: 36px;
    padding-left: 36px;
  }

  .ig-navigation-drawer {
    top: 36px !important;
    left: 36px !important;
  }
}

.tool-guides {
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 36px;
    height: 36px;
    background: #333;
    content: "";
  }

  .scena-guides-manager {
    canvas {
      vertical-align: top;
    }
    &.scena-guides-horizontal {
      position: absolute;
      top: 0;
      left: 36px;
      height: 36px;
      width: 100vw;
      z-index: 9999;
    }
    &.scena-guides-vertical {
      position: absolute;
      top: 36px;
      left: 0;
      width: 36px;
      height: 100%;
      z-index: 9999;
    }
  }
}
</style>
