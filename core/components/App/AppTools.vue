<script setup lang="ts">
import { useTheme } from "vuetify";

const extraStore = useExtraStore()
const themeStore = useThemeStore()
const theme = useTheme()

const extraOptions = computed(() => extraStore.options)

// restore previous dark theme state
themeStore.restorePreviousState(theme)

// kbd shortcuts
onMounted(() => {
  window.addEventListener("keydown", (e) => {
    // prevent if focus isn't on the body
    if (document.activeElement !== document.body) {
      return false
    }

    if (String.fromCharCode(e.keyCode) === "B") {
      extraStore.toggleAppBar()
    }
    if (String.fromCharCode(e.keyCode) === "R") {
      extraStore.toggleGuides()
    }
    if (String.fromCharCode(e.keyCode) === "D") {
      themeStore.toggleDarkTheme(theme)
    }
  })
})
</script>

<template>
  <ToolGuides v-if="extraOptions.guides" />
</template>

<style scoped lang="scss"></style>
