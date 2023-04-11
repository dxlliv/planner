<template>
  <v-img :src="media.path" />
</template>

<script setup lang="ts">
defineProps({
  media: Object as () => IProfileMedia
})
</script>

<style scoped lang="scss">
.instagram__media {
  border-top: 1px solid #dbdbdb;
  margin-top: 40px;
  padding-top: 20px;
  user-select: none;

  &__video {
    position: relative;

    video {
      max-width: 100%;
    }

    &-slider {
      position: absolute;
      bottom: 20px;
      left: 15px;
      right: 15px;
      width: calc(100% - 30px);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;

      &__value {
        position: absolute;
        top: 11px;
        left: 11px;
        padding: 0 5px;
        background: #3a3a3a;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        font-size: 15px;
        opacity: 0;
        cursor: default;
        transition: opacity 0.2s ease-in-out;
      }
    }

    &:hover {
      .instagram__media__video-slider {
        opacity: 1;

        &__value {
          opacity: 1;
        }
      }
    }
  }
}
</style>
