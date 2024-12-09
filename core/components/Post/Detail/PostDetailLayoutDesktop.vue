<script setup lang="ts">
defineProps<{
  collection?: string
}>()
</script>

<template>
  <v-card class="app-post-detail app-post-detail--desktop bg-background" flat>
    <v-row no-gutters>
      <v-col
        :class="[
          'flex-grow-1 app-post-detail__media',
          { 'app-post-detail__media--reel': collection === 'reels' },
        ]"
        style="width: calc(100% - 385px)"
        align-self="center"
      >

        <slot name="media" />

      </v-col>
      <v-divider vertical />
      <v-col
          class="flex-grow-0 relative"
          style="min-width: 385px !important;"
      >
        <div class="app-post-detail__interactions">

          <slot name="detail" />

        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss">
.app-post-detail {
  border-radius: 4px !important;
  //min-height: 450px;
  max-height: 80dvh;

  &__media {
    &--reel {
      max-width: 50vh;
      aspect-ratio: 9 / 16;
    }
  }

  .relative {
    position: relative;
  }

  &__interactions {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-auto-rows: 65px calc(100% - 65px - 122px - 60px) 122px 60px;
  }
}
</style>