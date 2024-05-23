<script setup lang="ts">
const { locale, setLocale } = useI18n()
const appConfig = useAppConfig()

const language = ref(locale.value)

function onLanguageSelect(languageSelected: any) {
  setLocale(languageSelected.value)
  language.value = languageSelected.value
}
</script>

<template>
  <span class="planner-language-switcher cursor-pointer">
    {{language}}

    <v-menu activator="parent" :offset="[12,6]">
      <v-card flat :elevation="0" border>
        <v-list flat>
          <v-list-item
            v-for="language of appConfig.i18n.availableLocales"
            class="py-0" :min-height="16"
          >
            <div
              class="cursor-pointer text-overline text-center"
              v-text="language.name"
              @click="onLanguageSelect(language)"
            />
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>

  </span>
</template>

<style lang="scss">
.planner-language-switcher {

}
</style>