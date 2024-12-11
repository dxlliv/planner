<script setup lang="ts">
import { useDisplay } from "vuetify";

const props = defineProps<{
  user?: IUser
  add?: boolean
}>()

const display = useDisplay()
const router = useRouter()
const contextMenu = reactive({
  enabled: false,
  x: 0,
  y: 0,
})

const dialogEditProfile = ref(false)

function onUserOpen() {
  router.push(props.user.route)
}

function onUserEdit() {
  dialogEditProfile.value = true
}

function onProfileClick(e) {
  if (display.mdAndUp.value) {
    router.push(props.user.route)
    return
  }

  contextMenu.enabled = true
}

function onProfileContextMenu(e) {
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
  <div :class="['dx-profile-selector', { 'dx-profile-selector--add': add }]">
    <template v-if="user">
      <router-link :to="user.route" />
      <a
        class="cursor-pointer"
        @click="onProfileClick"
        @contextmenu="onProfileContextMenu"
      >
        <suspense>
          <UserSelectorAvatar
            :key="user.profile.avatar"
            :avatar="user.profile.avatar"
          >
            <template #inner>
              <UserSelectorBadgeChanges v-if="user.hasLocalChanges || user.hasUnsavedChanges" />
            </template>
          </UserSelectorAvatar>
        </suspense>

        <h3 class="mt-4 text-truncate" v-text="user.profile.username" />

        <UserSelectorMenu v-model="contextMenu.enabled">
          <UserSelectorMenuOptions
            @open="onUserOpen"
            @edit="onUserEdit"
            :user="user"
          />
        </UserSelectorMenu>
      </a>

      <a
        class="d-inline-block text-blue-grey-lighten-2 mt-n1"
        :href="user.profile.publicProfile"
        target="_blank"
      >
        <v-icon icon="mdi-arrow-top-right" size="14px" />
      </a>
    </template>
    <slot />

    <UserEditorDialog edit v-model="dialogEditProfile">
      <InstagramUserEditorForm
        :user="user"
        @close="dialogEditProfile = false"
      />
    </UserEditorDialog>
  </div>
</template>

<style lang="scss">
.dx-profile-selector {
  position: relative;
  display: block;
  text-align: center;
  margin: 0 12px;
  vertical-align: top;

  &__context-menu {
    .v-list {
      padding: 0;
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
