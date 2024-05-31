<template>
  <UserSelector add @click="onProfileAdd">
    <UserSelectorAvatar
      @click="contextMenu = !contextMenu"
      @contextmenu="
        (e) => {
          e.preventDefault()
          contextMenu = !contextMenu
        }
      "
    >
      <template #inner>
        <v-icon size="48px" icon="mdi-plus" color="grey-lighten-1" />
      </template>

      <UserSelectorMenu v-model="contextMenu">
        <UserSelectorAddMenuOptions
          @openCreateProfileDialog="createProfileDialog = true"
        />
      </UserSelectorMenu>

      <h3
        class="text-truncate mt-4 mx-auto text-center"
        v-text="randomUsername.value"
      />
    </UserSelectorAvatar>

    <UserEditorDialog create v-model="createProfileDialog">
      <InstagramUserEditorForm @close="createProfileDialog = false" />
    </UserEditorDialog>
  </UserSelector>
</template>

<script setup lang="ts">
const randomUsername: any = reactive({
  value: "",
  generatorInterval: 0,
})

const createProfileDialog = ref(false)
const contextMenu = ref(false)

watch(
  () => contextMenu.value,
  (opened) => {
    if (opened) {
      startRandomUsernameGenerator()
    } else {
      stopRandomUsernameGenerator()
    }
  },
)

function startRandomUsernameGenerator() {
  randomUsername.generatorInterval = setInterval(() => {
    randomUsername.value = generateUuidv4().substring(0, 6)
  }, 75)
}

function stopRandomUsernameGenerator() {
  clearInterval(randomUsername.generatorInterval)
  randomUsername.value = ""
}

async function onProfileAdd() {
  //profileManagerStore.importProfile()
  //configUserStore.setUserConfig(config)
}
</script>

<style scoped lang="scss">
h3 {
  max-width: 240px;
  height: 28px;
  opacity: 0.33;
}
</style>
