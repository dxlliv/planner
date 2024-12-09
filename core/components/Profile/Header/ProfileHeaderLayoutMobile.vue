<script setup lang="ts">

</script>

<template>
  <div class="app-profile__header px-2 px-sm-0">
    <div class="app-profile__header__top py-2">
      <v-row>
        <v-col class="flex-grow-1 pb-2" align-self="center">

          <slot name="back-button" />
          <slot name="username" />

        </v-col>
        <v-col class="flex-grow-0 px-1 text-right" align-self="center" style="min-width: 120px;">

          <slot name="actions-top" />

        </v-col>
      </v-row>
    </div>

    <div class="mb-5 pa-sm-2">
      <v-row>
        <v-col cols="3" class="app-profile__header__avatar text-left">

          <slot name="avatar" />

        </v-col>
        <v-col cols="9" align-self="center">

          <slot name="stats" />

        </v-col>
      </v-row>
    </div>

    <div class="mt-4 mt-n6 mb-3 pa-sm-2">
      <slot name="description" />
    </div>

    <div class="mb-3">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-profile__header {
  text-align: left;
  border-bottom: rgba(var(--v-border-color), var(--v-border-opacity));

  :deep(.app-profile__username) {
    display: inline-block;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
  }

  :deep(.app-profile__header__description) {
    font-size: 16px;
    line-height: 24px;
    word-wrap: break-word;
  }
}
</style>