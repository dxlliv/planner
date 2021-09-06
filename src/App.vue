<template>
  <v-app :data-theme="options.theme">
    <router-view />
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  .v-application {
    padding-top: 60px;

    &[data-theme="dark"] {
      background: white;
      color: #262626;
    }

    &[data-theme="dark"] {
      background: black;
      color: white;

      .instagram__header {
        border-bottom: 1px solid #282828;
      }
    }
  }
}
</style>

<script setup>
import {onMounted, reactive, provide} from "vue";

const options = reactive({
  rulers: false,
  theme: 'light'
})

provide('options', options)

onMounted(() => {
  window.addEventListener('keydown', e => {
    if (String.fromCharCode(e.keyCode) === 'R') {
      options.rulers = !options.rulers
    }
    if (String.fromCharCode(e.keyCode) === 'D') {
      options.theme = options.theme === 'dark' ? 'light' : 'dark'
    }
  })
})
</script>