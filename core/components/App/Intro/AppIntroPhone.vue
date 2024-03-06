<script setup>
const date = ref(null)

onMounted(() => {
  date.value = new Date()

  setInterval(() => date.value = new Date(), 500)
})

const time = computed(() => {
  if (!date.value) {
    return ''
  }

  let hours = date.value.getHours()
  if (hours.toString().length === 1) hours = `0${hours}`

  let minutes = date.value.getMinutes()
  if (minutes.toString().length === 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
})
</script>

<template>
  <div class="dxlliv-phone">

    <div class="dxlliv-phone__nav">

      <v-row>
        <v-col class="text-left">
          <b />
          <span v-text="time" />
        </v-col>
        <v-col class="text-right">
          <div class="dxlliv-phone__nav__signal">
            <v-icon icon="mdi-signal-5g" />
            <v-icon icon="mdi-signal" class="ms-1" />
          </div>
          <v-icon icon="mdi-battery-80" class="ms-1" />
        </v-col>
      </v-row>

    </div>

    <div class="dxlliv-phone__content">
      <slot />
    </div>

  </div>
</template>

<style scoped lang="scss">
.dxlliv-phone {
  position: relative;
  display: inline-block;
  margin: 0 auto;
  padding: 22px 0 0 0;
  border-radius: 20px;
  aspect-ratio: 9/16;
  background: white;
  box-shadow: 0px 0px 0px 5px #000, 0px 0px 0px 7px #222, 0px 0px 0px 8px #444;

  &__nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 22px;
    line-height: 30px;
    padding: 0 16px;
    font-size: 8px;
    text-align: right;
    color: black;

    &__signal {
      position: relative;
      display: inline-block;

      .v-icon {
        &.mdi-signal-4g,
        &.mdi-signal-5g {
          font-size: 8px;
          position: absolute;
          top: 8px;
          left: 2px;
          margin: 0;
        }
      }
    }

    span {
      display: block;
      font-weight: bold;
      font-size: 10px;
      margin-left: 18px;
      margin-top: 1px;
    }

    i {
      margin-top: -2px;
      font-size: 12px;

      &.mdi-battery-80 {
        margin-top: -3px;
        font-size: 12px;
      }
    }

    b {
      position: absolute;
      display: block;
      color: transparent;
      position: absolute;
      top: 9px;
      left: 16px;
      width: 12px;
      height: 12px;
      background-color: #101010;
      border-radius: 12px;
      box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);

      &:after {
        content: '';
        position: absolute;
        background-color: #2d4d76;
        width: 6px;
        height: 6px;
        top: 2px;
        left: 2px;
        top: 3px;
        left: 3px;
        display: block;
        border-radius: 4px;
        box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
      }
    }
  }

  &__content {
    height: 100%;
  }

  :deep(iframe) {
    border: 0;
    border-radius: 0 0 20px 20px;
    min-width: 310px;
    min-height: 100%;
  }
}
</style>