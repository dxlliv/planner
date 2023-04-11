<template>
  <div class="igp-profile-page__tabs">
    <template v-for="(tab, i) of tabs">
      <div
        v-if="profile?.media[tab.name].length > 0"
        :key="i"
        :class="[
          'igp-profile-page__tabs__tab',
          {
            'igp-profile-page__tabs__tab--active': active === tab.name
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

defineProps({
  profile: Object as () => IProfile,
  active: String
})

const tabs = [
  {
    name: "posts",
    label: "Posts",
    icon: "mdi-grid"
  },
  {
    name: "reels",
    label: "Reels",
    icon: "mdi-play-box-multiple-outline"
  }
]
</script>

<style scoped lang="scss">
.igp-profile-page__tabs {
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
