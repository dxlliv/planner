<script lang="ts">

</script>

<template>
  <div class="dx-phone">
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
  border-radius: 48px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  height: 100vh;
  min-width: 30vw;
  margin: 100px auto;
  border: 0.8vw solid #222;
  aspect-ratio: 2.4 / 5;
  margin-bottom: -8vh;

  &__screen {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 40px;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1), 0 4px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    text-align: center;
    color: #333;
    font-family: Arial, sans-serif;
  }

  &__h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  &__notch {
    position: absolute;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
    width: 36%;
    height: 3.5%;
    background: #000;
    border-radius: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
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
}
</style>