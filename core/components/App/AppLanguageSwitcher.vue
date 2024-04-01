<script setup lang="ts">
const { locale } = useI18n()
const appConfig = useAppConfig()

const language = ref(locale.value)

function onLanguageSelect(languageSelected: any) {
  locale.value = language.value = languageSelected.value
}
</script>

<template>
  <div class="planner-language-switcher d-inline-block">
    <v-select
      variant="plain" hide-details menu-icon=""
      :items="appConfig.i18n.availableLocales"
      item-title="name"
      item-value="code"
      :menu-props="{ closeOnContentClick: true }"
      v-model="language"
    >
      <template v-slot:item="{ item }">
        <div
          class="cursor-pointer text-overline text-center px-4"
          v-text="item.title"
          @click="onLanguageSelect(item)"
        />
      </template>
      <template v-slot:selection="{ item }">
        <div
          class="text-overline"
          v-text="item.title"
        />
      </template>
    </v-select>
  </div>
</template>

<style lang="scss">
.planner-language-switcher {
  .v-field__input {
    padding: 0;
  }

  * {
    height: 32px;
  }
}
</style>