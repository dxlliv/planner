<script setup lang="ts">

</script>

<template>
  <div class="app-profile__header py-10">
    <v-row>
      <v-col
        cols="4" align-self="center"
        class="app-profile__header__avatar text-center"
      >
        <slot name="avatar" />
      </v-col>

      <v-col cols="8">
        <div class="mb-6">
          <slot name="username" />
        </div>

        <div class="mb-6">
          <slot name="stats" />
        </div>

        <slot name="display-name" />
        <slot name="description" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.app-profile__header {
  text-align: left;
  border-bottom: rgba(var(--v-border-color), var(--v-border-opacity));

  :deep(.app-profile__header__username) {
    display: block;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
  }

  :deep(.app-profile__header__biography) {
    font-size: 16px;
    line-height: 24px;
    word-wrap: break-word;
  }
}
</style>