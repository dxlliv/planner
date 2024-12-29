<script setup lang="ts">
import { useDisplay } from "vuetify";

const props = defineProps<{
  user?: IUser
  add?: boolean
}>()

const display = useDisplay()
const router = useRouter()
const homeStore = useHomeStore()

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
    homeStore.setProfilePreview(props.user.profile.username)
    return
  }

  contextMenu.enabled = true
}
</script>

<template>
  <div :class="['dx-profile-selector', { 'dx-profile-selector--add': add }]">
    <template v-if="user">
      <router-link :to="user.route" />
      <a
        class="cursor-pointer"
        @click="onProfileClick"
      >
        <suspense>
          <UserSelectorAvatar
            :key="user.profile.avatar"
            :avatar="user.profile.avatar"
          >
            <template #inner>

              <UserSelectorBadgeChanges
                v-if="user.hasLocalChanges || user.hasUnsavedChanges"
              />

            </template>

            <UserSelectorMenu
              :offset="[56, 0]"
            >
              <UserSelectorMenuOptions
                @open="onUserOpen"
                @edit="onUserEdit"
                :user="user"
              />
            </UserSelectorMenu>
          </UserSelectorAvatar>
        </suspense>

        <h3 class="mt-4 text-truncate" v-text="user.profile.username" />
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
  width: 185px;
  margin: 0 auto;
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
