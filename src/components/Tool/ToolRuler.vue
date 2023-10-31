<template>
  <div
    :class="[
      'rulers',
      {
        'rulers--left': props.left,
        'rulers--right': props.right,
        'rulers--top': props.top,
        'rulers--bottom': props.bottom,
      },
    ]"
  >
    <v-slider
        ref="pageRuler" v-model="pageRulerPosition" :min="0" :max="max"
        :direction="props.left || props.right ? 'vertical' : 'horizontal'"
    />

    <div
      v-if="props.left || props.right"
      class="ruler ruler--horizontal"
      :style="{
        top: `${pageRulerPosition}px`,
      }"
    />

    <div
      v-if="props.top || props.bottom"
      class="ruler ruler--vertical"
      :style="{
        left: `${pageRulerPosition}px`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
}>();

const max = ref(0)
const pageRuler = ref()
const pageRulerPosition = ref(0)

onMounted(() => {
  if (props.left || props.right) {
    max.value = window.innerHeight
  } else {
    max.value = window.innerWidth
  }
});
</script>

<style lang="scss">
.rulers {
  position: fixed;

  &--top {
    left: 0;
    right: 0;
    margin-top: -14px;
    margin-left: -10px;
    margin-right: -25px;
  }

  &--bottom {
    left: 0;
    right: 0;
    bottom: 0;
    margin-bottom: -36px;
    margin-left: -10px;
    margin-right: -25px;
  }

  &--left {
    left: -2px;
    top: 0;
    bottom: 0;
    margin-top: -5px;

    .v-input {
      margin: 0;
    }
  }

  &--right {
    top: 0;
    bottom: 0;
    right: -2px;
    margin-top: -5px;
    height: 100vh;

    .v-input {
      margin: 0;
    }
  }

 /*

  */

  .ruler {
    position: fixed;
    pointer-events: none;

    &--horizontal {
      left: 0;
      right: 0;
      background: #444;
      height: 1px;
    }

    &--vertical {
      top: 0;
      bottom: 0;
      background: #444;
      width: 1px;
    }
  }
}

.v-slider.v-input--vertical .v-slider-track {
  height: 100vh;
}
</style>
