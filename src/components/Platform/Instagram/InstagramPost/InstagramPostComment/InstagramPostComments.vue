<script setup lang="ts"></script>

<template>
  <div class="ig-user-comments">
    <v-divider class="ma-0" />
    <slot>
      <v-row no-gutters="" class="text-center fill-height">
        <v-col align-self="center"> No comments here. </v-col>
      </v-row>
    </slot>
    <v-divider class="ma-0" />
  </div>
</template>

<style scoped lang="scss">
svg {
  margin-top: 5px;
}

.v-sheet.v-theme--dark {
  svg {
    fill: white;
  }
}
</style>
