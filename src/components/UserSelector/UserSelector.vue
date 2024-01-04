<script setup lang="ts">
defineProps<{
  user?: IUser;
  add?: boolean
}>();

const contextMenu = reactive({
  enabled: false,
  x: 0,
  y: 0
})

const editProfileDialog = ref(false)

function onUserEdit() {
  editProfileDialog.value = true
}

function onShowProfileContextMenu(e) {
  e.preventDefault()

  contextMenu.enabled = false
  contextMenu.x = e.clientX
  contextMenu.y = e.clientY

  nextTick(() => {
    contextMenu.enabled = true
  })
}
</script>

<template>
  <div :class="['ig-profile-selector', {'ig-profile-selector--add': add}]">
    <template v-if="user">
      <router-link
          :to="user.route"
          @contextmenu="onShowProfileContextMenu"
      >
        <suspense>
          <UserSelectorAvatar :avatar="user.profile.avatar">
            <template #inner>
              <UserSelectorBadgeChanges v-if="user.hasLocalChanges" />
            </template>
          </UserSelectorAvatar>
        </suspense>

        <h3 class="mt-4 text-truncate" v-text="user.profile.username" />

        <UserSelectorMenu
            v-if="contextMenu.enabled"
            v-model="contextMenu.enabled"
            @edit="onUserEdit"
            :user="user"
        />

      </router-link>

      <a
          class="text-blue-grey-lighten-2"
          :href="user.profile.public_profile" target="_blank"
      >🡥</a>
    </template>
    <slot />

    <UserEditorDialog
        title="Edit profile"
        v-model="editProfileDialog"
    >
      <InstagramUserEditorForm
          :user="user"
          @close="editProfileDialog = false"
      />
    </UserEditorDialog>
  </div>
</template>

<style lang="scss">
.ig-profile-selector {
  position: relative;
  display: block;
  text-align: center;
  margin: 0 12px;
  vertical-align: top;

  &__context-menu {
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

  h3 {
    max-width: 150px;
    margin: 0 auto;
  }

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
