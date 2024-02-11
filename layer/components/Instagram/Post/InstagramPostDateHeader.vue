<script setup lang="ts"></script>

<template>
  <v-sheet>
    <v-row no-gutters class="mt-1">
      <v-col>
        <InstagramIconHeart class="mr-2" />
        <InstagramIconComment class="mr-2" />
        <InstagramIconShare />
      </v-col>
      <v-col class="text-right">
        <InstagramIconBookmark />
      </v-col>
    </v-row>

    <div class="font-weight-bold text-subtitle-2 mt-2 mb-n2">0 likes</div>
  </v-sheet>
</template>

<style scoped lang="scss">
.v-sheet {
  svg {
    fill: black;
  }

  &.v-theme--dark {
    svg {
      fill: white;
    }
  }
}
</style>
