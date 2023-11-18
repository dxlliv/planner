<template>
  <div class="tool-guides">
    <Guides type="horizontal" />
    <Guides type="vertical" />
  </div>
</template>

<script setup lang="ts">
import Guides from "vue3-guides";
</script>

<style lang="scss">
body.tool-guides--enabled {
  .v-application__wrap {
    padding-top: 36px;
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
    content: '';
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
    }
    &.scena-guides-vertical {
      position: absolute;
      top: 36px;
      left: 0;
      width: 36px;
      height: 100%;
    }
  }
}
</style>
