<script setup lang="ts">
defineProps<{
  iframe?: boolean
}>()
</script>

<template>
  <div :class="['dx-phone', {'dx-phone--iframe': iframe}]">
    <div class="dx-phone__screen">
      <div class="dx-phone__content">

        <slot />

      </div>
    </div>
    <div class="dx-phone__notch">
      <div class="dx-phone__camera-lens" />
    </div>
    <div class="dx-phone__buttons">
      <div class="dx-phone__volume-up" />
      <div class="dx-phone__volume-down" />
      <div class="dx-phone__power-button" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dx-phone {
  background: #333;
  border-radius: 48px 48px 0 0;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2), 0 0 96px 48px rgb(var(--v-theme-background));
  position: relative;
  overflow: hidden;
  height: 90vh;
  //min-width: 30vw;
  margin: 20vh auto -20px auto;
  left: -10vw;
  border: var(--phone-border-width) solid #222;
  aspect-ratio: 2.8 / 5;
  z-index: 1;

  --phone-border-width: 0.8vw;

  @media(min-width: 1280px) {
    --phone-border-width: 10px;
  }

  &__screen {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    position: relative;
    text-align: center;
    color: #333;
    border-radius: 2px;
    overflow: hidden;

    :deep(iframe) {
      width: 100.05%;
      height: calc(85dvh - 20px);
      border: 0;
    }
  }

  &__notch {
    position: absolute;
    top: 1.1%;
    left: 50%;
    transform: translateX(-50%);
    width: 36%;
    height: 3.4dvh;
    background: #000;
    border-radius: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1006;
  }

  &__camera-lens {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translate(0, -50%);
    width: 14px;
    height: 14px;
    background: #222;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

    &::before {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      width: 12px;
      height: 12px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.4) 60%);
      border-radius: 50%;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      z-index: -1;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      right: -2px;
      width: 6px;
      height: 6px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
      opacity: 0.4;
    }
  }

  &__buttons {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
  }

  &__volume-up,
  &__volume-down,
  &__power-button {
    width: 12px;
    height: 40px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  &__volume-up {
    position: absolute;
    top: 25%;
    left: -18px;
  }

  &__volume-down {
    position: absolute;
    bottom: 25%;
    left: -18px;
  }

  &__power-button {
    position: absolute;
    top: 40%;
    right: -18px;
    width: 14px;
    height: 50px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  &--iframe {
    .dx-phone__screen {
      display: inherit;
    }

    .dx-phone__content {
      height: 100dvh !important;
    }
  }
}
</style>