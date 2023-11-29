<template>
  <div :class="['ig-profile-selector', {'ig-profile-selector--add': add}]">
    <template v-if="profile">
      <router-link
          :to="{
            name: 'profile',
            params: {
              username: profile.username,
            },
          }"
          @contextmenu="showProfileContextMenu"
      >
        <suspense>
          <UserAvatar :avatar="profile.avatar" />
        </suspense>

        <h3 class="mt-4" v-text="profile.username" />

        <!--
        <UserSelectorMenu
            v-model="contextMenu.enabled"
            :profile="profile"
        />
        -->

      </router-link>

      <a
          class="text-blue-grey-lighten-4"
          :href="profile.public_profile" target="_blank"
      >🡥</a>
    </template>
    <slot />
  </div>
</template>

<script setup lang="ts">
const { profile } = defineProps<{
  profile?: IUserProfile;
  add?: boolean
}>();

const contextMenu = reactive({
  enabled: false,
  x: 0,
  y: 0
})

function showProfileContextMenu(e) {
  e.preventDefault()

  contextMenu.enabled = false
  contextMenu.x = e.clientX
  contextMenu.y = e.clientY

  nextTick(() => {
    contextMenu.enabled = true
  })
}
</script>

<style lang="scss">
.ig-profile-selector__context-menu {
  .v-list {
    padding: 0;

    &-item {
      min-height: 0;
    }

    &-item-title {
      font-size: 13px;
    }
  }
}

.ig-profile-selector {
  position: relative;
  display: inline-block;
  text-align: center;
  margin: 0 32px;
  vertical-align: top;

  a {
    color: inherit;
    text-decoration: initial;
  }

  &--add {
    cursor: pointer;

    :deep(.v-icon) {
      opacity: 0.5;
    }

    &:hover {
      :deep(.v-icon) {
        opacity: 1;
      }
    }
  }
}
</style>
