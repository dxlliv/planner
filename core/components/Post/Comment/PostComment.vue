<script setup lang="ts">

</script>

<template>
  <v-sheet class="app-post-comment fill-height">
    <div class="px-4 py-3">
      <v-row>
        <v-col class="flex-grow-0">
          <slot name="avatar" />
        </v-col>
        <v-col class="flex-grow-1 pl-1" align-self="center">
          <slot name="username" />

          <slot />
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<style scoped lang="scss">
.app-post-comment {
  line-height: 18px !important;
}
</style>
