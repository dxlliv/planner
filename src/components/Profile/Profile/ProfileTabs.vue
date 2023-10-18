<template>
  <div class="ig-profile-page__tabs">
    <template v-for="(tab, i) of tabs">
      <div
        v-if="profile?.media[tab.name].length > 0"
        :key="i"
        :class="[
          'ig-profile-page__tabs__tab',
          {
            'ig-profile-page__tabs__tab--active': active === tab.name
          }
        ]"
        @click="emit('select', tab.name)"
      >
        <v-icon size="15">
          {{ tab.icon }}
        </v-icon>
        {{ tab.label }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["select"])

const props = defineProps<{
  profile: IProfile,
  active: string
}>()

const tabs = []

if (props.profile?.media.posts.length > 0) {
    tabs.push({
      name: "posts",
      label: "Posts",
      icon: "mdi-grid"
    })
}

if (props.profile?.media.reels.length > 0) {
    tabs.push({
      name: "reels",
      label: "Reels",
      icon: "mdi-play-box-multiple-outline"
    })
}
</script>

<style scoped lang="scss">
.ig-profile-page__tabs {
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
    color: var(--ig-tab-color);

    &--active {
      color: var(--ig-tab-color-active);
      box-shadow: 0 -1px 0 0 var(--ig-tab-color-border);
    }

    .v-icon {
      margin-right: 2px;
      vertical-align: -1px;
    }
  }
}
</style>
