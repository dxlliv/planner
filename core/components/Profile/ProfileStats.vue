<script setup lang="ts">
defineProps<{
  stats: {
    count: string|number
    text: string
  }[];
  mobile?: boolean
}>()
</script>

<template>
  <ul
    :class="[
      'app-profile__stats',
      { 'app-profile__stats--mobile': mobile },
    ]"
  >
    <ProfileStatsItem
      v-for="(item, index) in stats" :key="index"
      :count="item.count"
      :text="item.text"
    />
  </ul>
</template>

<style scoped lang="scss">
.app-profile__stats {
  list-style-type: none;
  text-transform: lowercase;

  li {
    display: inline-block;
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 640px) {
      margin-right: 24px;
    }
  }

  &--mobile {
    padding: 12px 0;
    text-align: center;
    width: 100%;

    li {
      width: 33.3%;
      margin: 0;

      :deep(b) {
        display: block;
        font-size: 16px;
      }

      :deep(span) {
        display: block;
        margin-top: -4px;
      }
    }
  }
}
</style>
