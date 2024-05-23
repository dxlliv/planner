<script setup lang="ts">
const emit = defineEmits(["select"])

const props = defineProps<{
  media: IUserMedia
  active: string
}>()

const tabs: ComputedRef<{ name: string; label: string; icon: string }[]> =
  computed(() => {
    let items = [
      {
        name: "posts",
        label: "Posts",
        icon: "mdi-grid",
      },
    ]

    if (
      props.media.hasCollection("reels") &&
      props.media.collections.reels.length > 0
    ) {
      items.push({
        name: "reels",
        label: "Reels",
        icon: "mdi-play-box-multiple-outline",
      })
    }

    return items
  })
</script>

<template>
  <div class="ig-profile-page__tabs">
    <template v-for="(tab, i) of tabs" :key="i">
      <div
        :class="[
          'ig-profile-page__tabs__tab',
          {
            'ig-profile-page__tabs__tab--active': active === tab.name,
          },
        ]"
        @click="emit('select', tab.name)"
      >
        <v-icon size="15">
          {{ tab.icon }}
        </v-icon>

        <span v-text="tab.label" />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.ig-profile-page__tabs {
  display: block;
  text-align: center;
  padding: 0;
  margin-bottom: 2px;

  &__tab {
    display: inline-block;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    padding: 15px 25px;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));

    &--active {
      color: rgb(var(--v-theme-on-background));
      margin-top: -1px;

      @media(min-width: 960px) {
        border-top: 1px solid rgb(var(--v-theme-on-background));
      }

      @media(max-width: 959px) {
        border-bottom: 1px solid rgb(var(--v-theme-on-background));
        width: 33.3%;
      }
    }

    .v-icon {
      margin-right: 4px;
      vertical-align: -1px;
    }

    @media(max-width: 959px) {
      padding: 12px 25px;

      .v-icon {
        font-size: 20px !important;
        vertical-align: middle;
      }

      span {
        display: none;
      }
    }
  }
}
</style>
