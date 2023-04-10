<template>
  <v-app :data-theme="options.theme">
    <router-view />

    <footer class="py-6">
      <a href="https://github.com/dxlliv/ig-planner" target="_blank">
        <v-icon class="mt-n1 mr-1">mdi-github</v-icon> IG Planner
      </a>

      &middot;

      <a href="https://dxlliv.github.io/ig-planner/docs" target="_blank">
        Docs
      </a>
    </footer>
  </v-app>
</template>

<script setup lang="ts">
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

      .instagram__tabs__tab--active {
        color: #bbbbbb;
        box-shadow: 0 -1px 0 0 #4c4c4c;
      }
    }

    footer {
      font-size: 13px;
      color: #8e8e8e;

      a {
        color: #333;
        text-decoration: none;
      }
    }
  }
}
</style>