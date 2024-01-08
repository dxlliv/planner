<script setup lang="ts"></script>

<template>
  <v-sheet>
    <v-row no-gutters="">
      <v-col class="flex-grow-0 pl-4 pr-0 py-0" align-self="center">
        <InstagramIconEmoji />
      </v-col>
      <v-col class="flex-grow-1">
        <v-text-field
          placeholder="Add a comment..."
          variant="solo"
          flat
          hide-details
        >
          <template v-slot:append>
            <v-btn class="mr-2" variant="flat" text="Post" />
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-sheet>
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
