<template>
  <div
    :class="[
      'rulers',
      {
        'rulers--left': props.left,
        'rulers--right': props.right
      }
    ]"
  >
    <input ref="pageRulerY" v-model="pageRulerPositionY" type="range" />

    <div
      class="ruler ruler--horizontal"
      :style="{
        top: `${pageRulerPositionY}px`
      }"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  left: Boolean,
  right: Boolean
})

const pageRulerY = ref()
const pageRulerPositionY = ref(0)

onMounted(() => {
  pageRulerY.value.max = window.innerHeight
})
</script>

<style lang="scss">
.rulers {
  input {
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
    position: fixed;
    top: 0;
    width: 5px;
    height: 100%;
    transform: rotate(180deg);
  }

  &--left {
    input {
      left: 0;
    }
  }

  &--right {
    input {
      right: 0;
    }
  }

  .ruler {
    position: fixed;
    pointer-events: none;

    &--horizontal {
      left: 0;
      right: 0;
      background: #0075ff;
      height: 1px;
    }
  }
}
</style>
