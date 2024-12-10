<script setup lang="ts">

</script>

<template>
  <div class="dx-profile__header px-3 px-md-0">
    <div class="dx-profile__header__top py-2">
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

    <div class="mb-5 px-1 pa-sm-2">
      <v-row>
        <v-col cols="3" class="dx-profile__header__avatar text-left">

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

    <div class="mb-3 mx-sm-1">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dx-profile__header {
  font-size: 14px;
  text-align: left;
  border-bottom: rgba(var(--v-border-color), var(--v-border-opacity));

  :deep(.dx-profile__username) {
    display: inline-block;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
  }

  :deep(.dx-profile__header__description) {
    font-size: 16px;
    line-height: 24px;
    word-wrap: break-word;
  }
}
</style>