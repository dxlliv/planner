<template>
  <div class="instagram__tabs">
    <template v-for="(tab, i) of tabs">
      <div
          v-if="props.posts[tab.name] > 0"
          :class="['instagram__tabs__tab', {'instagram__tabs__tab--active': props.active === tab.name}]"
          @click="emit('select', tab.name)"
      >
        <v-icon size="15">{{tab.icon}}</v-icon> {{tab.label}}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const emit = defineEmits(['select'])
const props = defineProps({
  posts: Object,
  active: String
})

const tabs = [
  {
    name: 'posts',
    label: 'Post',
    icon: 'mdi-grid'
  },
  {
    name: 'reels',
    label: 'Reels',
    icon: 'mdi-play-box-multiple-outline'
  }
]
</script>

<style scoped lang="scss">
.instagram__tabs {
  display: block;
  margin-top: -20px;
  padding: 0;

  &__tab {
    display: inline-block;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    padding: 18px 25px;
    color: #929292;

    &--active {
      color: #262626;
      box-shadow: 0 -1px 0 0 black;
    }

    .v-icon {
      margin-right: 2px;
      vertical-align: -1px;
    }
  }
}
</style>